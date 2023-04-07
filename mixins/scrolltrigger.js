export default {
  methods: {
    slide(elem) {
      let dir = elem.dataset.dir || 'y';
      let len = +elem.dataset.len || 60;
      elem.style.transform = "translate" + dir.toUpperCase() + "(" + len + "px)";
      elem.style.opacity = "0";
      gsap.fromTo(
        elem, {
        [dir]: len,
        autoAlpha: 0
      }, {
        duration: 0.8,
        delay: elem.dataset.gsapdelay || 0,
        [dir]: 0,
        autoAlpha: 1,
        ease: "sine",
        overwrite: "auto",
      });
    },
    opacity(elem) {
      gsap.fromTo(
        elem, {
        autoAlpha: 0
      }, {
        duration: 0.8,
        delay: elem.dataset.gsapdelay || 0,
        autoAlpha: 1,
        ease: "sine",
        overwrite: "auto",
      });
    },
    scaleX(elem) {
      gsap.fromTo(
        elem, {
        scaleX: 0
      }, {
        scaleX: 1,
        duration: 1.2,
        delay: elem.dataset.gsapdelay || 0,
        autoAlpha: 1,
        ease: "sine",
        overwrite: "auto",
      });
    },
    animateFrom(elem) {
      if (elem.dataset.type === "opacity") this.opacity(elem);
      else if (elem.dataset.type === "scaleX") this.scaleX(elem);
      else this.slide(elem);
    },
    hide(elem) {
      gsap.set(elem, {
        autoAlpha: 0
      });
    },
    scrollTriggerInit() {
      let $this = this;
      gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        $this.hide(elem);
        ScrollTrigger.create({
          trigger: elem,
          start: "-50px bottom",
          once: true,
          onEnter: function () {
            $this.animateFrom(elem);
          },
        });
      });
    },
  },
  mounted() {
    this.scrollTriggerInit();
  },
}
