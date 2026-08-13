/* AGA Traders — consent-gated GA4 + enquiry event tracking.
   Nothing is set until the visitor accepts. Load in <helmet> on every page. */
(function () {
  var ID = "G-DP2HTNJQBE";
  var KEY = "aga-consent";
  var queue = [];
  var loaded = false;

  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  // Consent Mode: everything denied until the visitor says otherwise.
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500
  });

  function load() {
    if (loaded) return;
    loaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", ID, { anonymize_ip: true });
    while (queue.length) { var q = queue.shift(); gtag("event", q[0], q[1]); }
  }

  function track(name, params) {
    if (loaded) gtag("event", name, params || {});
    else if (queue.length < 40) queue.push([name, params || {}]);
  }
  window.agaTrack = track;

  function accept() { save("granted"); gtag("consent", "update", { analytics_storage: "granted" }); load(); hide(); }
  function decline() { save("denied"); hide(); }

  /* ---------- banner ---------- */
  var bar;
  function hide() { if (bar) bar.remove(); bar = null; }

  function build() {
    bar = document.createElement("div");
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Cookie choice");
    bar.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:9998;background:#ffffff;border-top:1px solid #cacacb;padding:20px 24px;font-family:var(--font-body,system-ui,sans-serif);display:flex;flex-wrap:wrap;gap:16px 32px;align-items:center;justify-content:space-between";

    var text = document.createElement("p");
    text.style.cssText = "font:400 14px/1.6 var(--font-body,inherit);color:#39393b;margin:0;max-width:72ch";
    text.innerHTML = 'We use Google Analytics to see which pages buyers read before they enquire. Nothing is set unless you accept, and we never sell or share the data. <a href="./legal.dc.html#cookies" style="color:#111111;text-decoration:underline;text-underline-offset:3px">Cookie Policy</a>.';

    var row = document.createElement("div");
    row.style.cssText = "display:flex;gap:12px;flex-wrap:wrap";

    function btn(label, fn, solid) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.style.cssText = "font:500 15px/1 var(--font-ui,inherit);border-radius:30px;padding:14px 28px;cursor:pointer;transition:transform 120ms ease,opacity 120ms ease;min-height:44px;" +
        (solid ? "background:#111111;color:#ffffff;border:1px solid #111111" : "background:#ffffff;color:#111111;border:1px solid #cacacb");
      b.onmousedown = function () { b.style.transform = "scale(0.96)"; b.style.opacity = "0.5"; };
      b.onmouseup = b.onmouseleave = function () { b.style.transform = ""; b.style.opacity = ""; };
      b.onclick = fn;
      return b;
    }
    row.appendChild(btn("Decline", decline, false));
    row.appendChild(btn("Accept", accept, true));
    bar.appendChild(text);
    bar.appendChild(row);
    document.body.appendChild(bar);
  }

  function start() {
    var c = saved();
    if (c === "granted") { gtag("consent", "update", { analytics_storage: "granted" }); load(); }
    else if (c !== "denied") { build(); }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();

  /* ---------- enquiry tracking ---------- */
  // WhatsApp buttons open via window.open — read the style out of the prefilled message.
  var open = window.open;
  window.open = function (url) {
    try {
      if (typeof url === "string" && url.indexOf("wa.me") > -1) {
        var msg = decodeURIComponent((url.split("text=")[1] || ""));
        var m = msg.match(/about the (.+?) from your readymade collection/i)
             || msg.match(/about custom production of (.+?)\./i);
        track("whatsapp_enquiry", {
          style: m ? m[1] : "general",
          page_path: location.pathname
        });
      }
    } catch (e) {}
    return open.apply(window, arguments);
  };

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a");
    if (!a) return;
    var h = a.getAttribute("href") || "";
    if (h.indexOf("wa.me") > -1) track("whatsapp_enquiry", { style: "utility_bar", page_path: location.pathname });
    else if (h.indexOf("mailto:") === 0) track("email_click", { page_path: location.pathname });
    else if (h.indexOf("tel:") === 0) track("phone_click", { page_path: location.pathname });
    else if (h.indexOf("shade-card") > -1) track("shade_card_download", { page_path: location.pathname });
  }, true);

  // Both forms post to Web3Forms — the subject line tells them apart.
  var fetch0 = window.fetch;
  window.fetch = function (input, init) {
    try {
      var url = typeof input === "string" ? input : (input && input.url) || "";
      if (url.indexOf("api.web3forms.com") > -1 && init && init.body && init.body.get) {
        var subj = String(init.body.get("subject") || "");
        track(subj.indexOf("Shade card") > -1 ? "shade_card_request" : "enquiry_submit", { page_path: location.pathname });
      }
    } catch (e) {}
    return fetch0.apply(window, arguments);
  };
})();
