    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');

    const snakeSize = 20;
    const snake = [{ x: 100, y: 100 }];
    const apple = { x: 200, y: 200 };
    let direction = 'right';
    let gamePaused = false;
    let score = 0;

    function drawSnake() {
      ctx.fillStyle = 'green';
      for (let i = 0; i < snake.length; i++) {
        if (i === 0) {
          
          ctx.fillStyle = 'green';
        } else {
          
          ctx.fillStyle = 'lightgreen'; 
        }
        ctx.fillRect(snake[i].x, snake[i].y, snakeSize, snakeSize);
      }
    }

    function drawApple() {
      ctx.fillStyle = 'red';
      ctx.fillRect(apple.x, apple.y, snakeSize, snakeSize);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSnake();
      drawApple();
      updateScore();
      if (!gamePaused) {
        moveSnake();
        checkCollision();
        checkAppleCollision();
      }
    }

    function moveSnake() {
      const head = { ...snake[0] };

      switch (direction) {
        case 'up':
          head.y -= snakeSize;
          break;
        case 'down':
          head.y += snakeSize;
          break;
        case 'left':
          head.x -= snakeSize;
          break;
        case 'right':
          head.x += snakeSize;
          break;
      }

      if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        gameOver();
      } else {
        snake.unshift(head);
        if (head.x === apple.x && head.y === apple.y) {
          generateNewApplePosition();
          score++;
        } else {
          snake.pop();
        }
      }
    }

    function checkCollision() {
      for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
          gameOver();
        }
      }
    }

    function checkAppleCollision() {
      if (snake[0].x === apple.x && snake[0].y === apple.y) {
        snake.push({});
        generateNewApplePosition();
      }
    }

    function generateNewApplePosition() {
      apple.x = Math.floor(Math.random() * canvas.width / snakeSize) * snakeSize;
      apple.y = Math.floor(Math.random() * canvas.height / snakeSize) * snakeSize;
    }

    function changeDirection(newDirection) {
      if (
        (newDirection === 'up' && direction !== 'down') ||
        (newDirection === 'down' && direction !== 'up') ||
        (newDirection === 'left' && direction !== 'right') ||
        (newDirection === 'right' && direction !== 'left')
      ) {
        direction = newDirection;
      }
    }

    function gameOver() {
      gamePaused = true;
      document.getElementById('gameOverText').style.display = 'block';
    }

    function resetGame() {
      gamePaused = false;
      score = 0;
      document.getElementById('gameOverText').style.display = 'none';
      snake.length = 1;
      snake[0] = { x: 100, y: 100 };
      direction = 'right';
      generateNewApplePosition();
    }

    function updateScore() {
      document.getElementById('score').innerText = `Puntaje: ${score}`;
    }

    setInterval(draw, 100);
