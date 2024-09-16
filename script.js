body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #000;
    color: #fff;
    font-family: Arial, sans-serif;
}

#gameContainer {
    position: relative;
}

#gameCanvas {
    border: 2px solid #fff;
    background-color: #000;
}

#startButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    font-size: 16px;
    background-color: #444;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#startButton:hover {
    background-color: #666;
}
