/* AGA Traders product-book lead capture. Mounts once per page:
   <x-import component-from-global-scope="lead-popup" from="./lead-popup.js" hint-size="0,0"></x-import>
   Anything with [data-product-book] or [data-shade-card] opens it manually. */
(function () {
  if (customElements.get("lead-popup")) return;

  var KEY = "aga-product-book";
  var ACCESS = "56233f9d-447f-4fd0-9ca3-19b749a9d599";

  var CSS = [
    ":host{all:initial}",
    ".wrap{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:24px;font-family:var(--font-body,system-ui,sans-serif);box-sizing:border-box}",
    ".wrap[data-open]{display:flex}",
    ".scrim{position:absolute;inset:0;background:rgba(17,17,17,.72)}",
    ".card{position:relative;background:#fff;width:100%;max-width:880px;max-height:92vh;overflow:auto;display:grid;grid-template-columns:340px minmax(0,1fr);border:1px solid #cacacb;transition:transform 120ms ease,opacity 120ms ease;opacity:0;transform:translateY(8px)}",
    ".wrap[data-open] .card{opacity:1;transform:none}",
    ".stage{background:#f5f5f5;display:flex;align-items:center;justify-content:center;overflow:hidden;min-height:100%}",
    ".stage img{width:100%;height:100%;object-fit:cover;display:block}",
    ".stage span{font:500 12px/1.5 var(--font-ui,inherit);letter-spacing:.18em;text-transform:uppercase;color:#707072}",
    ".body{padding:40px}",
    ".eyebrow{font:500 12px/1.75 var(--font-ui,inherit);letter-spacing:.18em;text-transform:uppercase;color:#707072;margin:0}",
    "h2{font:500 44px/0.95 var(--font-display,inherit);letter-spacing:-.005em;text-transform:uppercase;color:#111;margin:12px 0 0}",
    "p.lede{font:400 16px/1.5 var(--font-body,inherit);color:#39393b;margin:16px 0 0;max-width:44ch}",
    "ul{list-style:none;margin:20px 0 0;padding:0;display:flex;flex-direction:column;gap:8px}",
    "li{font:400 14px/1.5 var(--font-body,inherit);color:#39393b;padding-top:8px;border-top:1px solid #e5e5e5}",
    "form{display:flex;flex-direction:column;gap:12px;margin-top:24px}",
    "input{font:400 16px/1.5 var(--font-body,inherit);color:#111;background:#f5f5f5;border:1px solid transparent;border-radius:24px;padding:12px 20px;outline:none;box-sizing:border-box;width:100%}",
    "input:focus{background:#fff;border-color:#111;box-shadow:0 0 0 12px #f5f5f5}",
    "button{font:500 16px/1 var(--font-ui,inherit);color:#fff;background:#111;border:0;border-radius:30px;padding:16px 32px;cursor:pointer;transition:transform 120ms ease,opacity 120ms ease}",
    "button:active{transform:scale(.96);opacity:.5}",
    "button[disabled]{opacity:.5;cursor:default}",
    ".fine{font:400 12px/1.5 var(--font-body,inherit);color:#707072;margin:4px 0 0}",
    ".err{font:400 14px/1.5 var(--font-body,inherit);color:#d30005;margin:0}",
    ".close{position:absolute;top:12px;right:12px;width:40px;height:40px;border-radius:50%;border:0;background:transparent;color:#111;font:400 20px/1 var(--font-ui,inherit);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center}",
    ".dismiss{background:none;border:0;padding:8px 0;color:#707072;font:400 14px/1.5 var(--font-body,inherit);cursor:pointer;text-decoration:underline;align-self:flex-start}",
    ".dl{display:inline-block;text-decoration:none;text-align:center}",
    "@media (max-width:760px){.card{grid-template-columns:minmax(0,1fr)}.stage{display:none}.body{padding:28px}h2{font-size:32px}}"
  ].join("");

  function el(tag, props, kids) {
    var n = document.createElement(tag);
    if (props) Object.keys(props).forEach(function (k) {
      if (k === "text") n.textContent = props[k]; else n.setAttribute(k, props[k]);
    });
    (kids || []).forEach(function (c) { n.appendChild(c); });
    return n;
  }

  class LeadPopup extends HTMLElement {
    connectedCallback() {
      if (this._built) return;
      this._built = true;
      var root = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.textContent = CSS;
      root.appendChild(style);

      this.file = this.getAttribute("file") || "assets/aga-traders-product-book.pdf";
      this.image = this.getAttribute("image") || "";

      var wrap = el("div", { class: "wrap", role: "dialog", "aria-modal": "true", "aria-label": "Download the product book" });
      var scrim = el("div", { class: "scrim" });
      var card = el("div", { class: "card" });
      var stage = el("div", { class: "stage" });
      stage.appendChild(this.image
        ? el("img", { src: this.image, alt: "AGA Traders product book, fabric shade card and garment spec sheets from a knit fabric and clothing manufacturer" })
        : el("span", { text: "Product Book" }));

      this.body = el("div", { class: "body" });
      var close = el("button", { class: "close", type: "button", "aria-label": "Close" });
      close.textContent = "\u00d7";
      close.onclick = this.dismiss.bind(this);

      card.appendChild(stage);
      card.appendChild(this.body);
      card.appendChild(close);
      wrap.appendChild(scrim);
      wrap.appendChild(card);
      root.appendChild(wrap);
      this.wrap = wrap;
      scrim.onclick = this.dismiss.bind(this);

      this.renderForm();
      this.schedule();

      this._esc = function (e) { if (e.key === "Escape") this.dismiss(); }.bind(this);
      document.addEventListener("keydown", this._esc);
      document.addEventListener("click", function (e) {
        var t = e.target.closest && e.target.closest("[data-product-book],[data-shade-card]");
        if (t) { e.preventDefault(); this.open(); }
      }.bind(this));
    }

    disconnectedCallback() { document.removeEventListener("keydown", this._esc); }

    saved() { try { return localStorage.getItem(KEY) || ""; } catch (e) { return ""; } }
    save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

    schedule() {
      if (this.saved()) return;
      if (location.search.indexOf("nopopup") > -1) return;
      var fired = false;
      var go = function () {
        if (fired || this.saved()) return;
        fired = true;
        this.open();
      }.bind(this);
      this._t = setTimeout(go, parseInt(this.getAttribute("delay") || "25000", 10));
      var onScroll = function () {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        if (h > 0 && (window.scrollY / h) > 0.45) { window.removeEventListener("scroll", onScroll); go(); }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    open() { clearTimeout(this._t); this.wrap.setAttribute("data-open", ""); }
    dismiss() {
      clearTimeout(this._t);
      this.wrap.removeAttribute("data-open");
      if (!this.saved()) this.save("dismissed");
    }

    renderForm() {
      var b = this.body;
      b.innerHTML = "";
      b.appendChild(el("p", { class: "eyebrow", text: "Free Download" }));
      b.appendChild(el("h2", { text: "The Product Book" }));
      b.appendChild(el("p", { class: "lede", text: "The full shade card and the spec sheets for every style we run. Sent to your inbox as a PDF." }));
      var list = el("ul");
      ["25 fabric qualities with GSM, blend and construction", "800+ ready shades, no lab dip wait", "Spec sheets with measurements for five core styles", "Minimums, sampling and production lead times"]
        .forEach(function (t) { list.appendChild(el("li", { text: t })); });
      b.appendChild(list);

      var form = el("form");
      var email = el("input", { type: "email", name: "email", placeholder: "Work email (required)", required: "required", autocomplete: "email" });
      var name = el("input", { type: "text", name: "name", placeholder: "Name (optional)", autocomplete: "name" });
      var company = el("input", { type: "text", name: "company", placeholder: "Company (optional)", autocomplete: "organization" });
      var btn = el("button", { type: "submit", text: "Send Me The Product Book" });
      var err = el("p", { class: "err" });
      err.style.display = "none";
      var fine = el("p", { class: "fine", text: "Email is all we need. Name and company are optional. We send the book and nothing else — no newsletter." });
      var no = el("button", { type: "button", class: "dismiss", text: "No thanks" });
      no.onclick = this.dismiss.bind(this);

      [email, name, company, btn, err, fine, no].forEach(function (n) { form.appendChild(n); });
      form.onsubmit = function (e) {
        e.preventDefault();
        err.style.display = "none";
        btn.disabled = true;
        btn.textContent = "Sending";
        var data = new FormData();
        data.append("access_key", ACCESS);
        data.append("subject", "Product book download \u2014 agatraders.com");
        data.append("from_name", "AGAtraders website");
        data.append("Email", email.value);
        data.append("Name", name.value || "Not given");
        data.append("Company", company.value || "Not given");
        data.append("Page", location.pathname);
        fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
          .then(function (r) { return r.json(); })
          .then(function (r) {
            if (r && r.success) { this.save("sent"); this.renderDone(); }
            else { throw new Error("failed"); }
          }.bind(this))
          .catch(function () {
            btn.disabled = false;
            btn.textContent = "Send Me The Product Book";
            err.textContent = "That did not send. Message us on WhatsApp and we will send the book directly.";
            err.style.display = "block";
          });
      }.bind(this);
      b.appendChild(form);
    }

    renderDone() {
      var b = this.body;
      b.innerHTML = "";
      b.appendChild(el("p", { class: "eyebrow", text: "Sent" }));
      b.appendChild(el("h2", { text: "Check Your Inbox" }));
      var lede = el("p", { class: "lede", text: "The product book is on its way to your inbox." });
      b.appendChild(lede);
      var file = this.file;
      fetch(file, { method: "HEAD" }).then(function (r) {
        if (!r.ok) return;
        lede.textContent = "The product book is on its way. You can also download it now.";
        var dl = el("a", { class: "dl", href: file, download: "", text: "Download The Product Book" });
        dl.style.cssText = "font:500 16px/1 var(--font-ui,inherit);color:#fff;background:#111;border-radius:30px;padding:16px 32px;margin-top:24px";
        b.insertBefore(dl, b.lastChild);
      }).catch(function () {});
      var done = el("button", { type: "button", class: "dismiss", text: "Close" });
      done.onclick = this.dismiss.bind(this);
      b.appendChild(done);
    }
  }

  customElements.define("lead-popup", LeadPopup);
})();
