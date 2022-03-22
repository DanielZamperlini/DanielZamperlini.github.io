new TypeIt("#hero", {
  speed: 50,
  startDelay: 900,
})
  .type("desevolvedo", { delay: 100 })
  .move(-7, { delay: 100 })
  .type("n", { delay: 400 })
  .move(null, { to: "START", instant: true, delay: 300 })
  .move(1, { delay: 200 })
  .delete(1)
  .type("D", { delay: 225 })
  .pause(200)
  .move(2, { instant: true })
  .pause(200)
  .move(5, { instant: true })
  .move(5, { delay: 200 })
  .type("r", { delay: 350 })
  .move(null, { to: "END" })
  .type("<br />Front End & <br />U/UI ")
  .move(-4, { delay: 150 })
  .type("X")
  .move(null, { to: "END" })
  .type('<span class="place">desig</span>', { delay: 400 })
  .delete(".place", { delay: 800, instant: true })
  .type('<em><strong class="font-semibold">Designer. </strong></em>', {
    speed: 100,
  })
  .go();
