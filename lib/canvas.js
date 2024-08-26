const initLoadFunc = () => {
  const canvas = document.getElementById('myCanvas');
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const ctx = canvas.getContext('2d');
  // 中心位置
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // 初始化文本和字体
  const mainColor = '#FF7D0D'
  const text = '服务好专区';
  const fontSize = 48;
  ctx.font = `italic ${fontSize}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // 设置阴影效果
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;
  ctx.shadowBlur = 10;
  // 小圆圈
  const maxCircleRadius = 8;
  const minCircleRadius = 4;
  const circleDistance = 20; // 小圆圈之间的距离
  const circleOffsetY = 30; // 圆圈相对于文本的位置偏移量
  let step = 0;

  function drawTextWithCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制文字
    ctx.fillStyle = mainColor;
    ctx.fillText(text, centerX, centerY - circleOffsetY);
    // 绘制描边文本
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 2;

    // 计算小圆圈的位置
    const circleY = centerY + circleOffsetY;

    // 绘制小圆圈
    for (let i = 0; i < 3; i++) {
      const x = centerX - circleDistance + (i * circleDistance);
      const radius = minCircleRadius + (maxCircleRadius - minCircleRadius) * Math.abs(Math.sin(step + i * Math.PI / 3));

      ctx.beginPath();
      ctx.arc(x, circleY, radius, 0, Math.PI * 2);
      ctx.fillStyle = mainColor;
      ctx.fill();
    }

    // 更新动画步长
    step += 0.05;
    requestAnimationFrame(drawTextWithCircles);
  }

  drawTextWithCircles();
}

export default initLoadFunc