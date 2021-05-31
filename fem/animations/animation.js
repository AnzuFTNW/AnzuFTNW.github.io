// code taken from one of the examples on popmotion.io
const ball = document.querySelector(".box");
const divStyler = popmotion.styler(ball);
const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);

popmotion.listen(ball, "mousedown touchstart").start((e) => {
  e.preventDefault();
  popmotion.pointer(ballXY.get()).start(ballXY);
});

popmotion.listen(document, "mouseup").start(() => {
  popmotion
    .spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
    })
    .start(ballXY);
});
