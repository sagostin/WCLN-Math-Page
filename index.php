<?php

if (!isset($_POST['json'])) {
    die('Error! Example question template JSON must be provided.');
}

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>WCLN</title>
    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    <script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
</head>

<body>
<script>
    let json = JSON.parse('<?= $_POST['json'] ?>');
</script>

<!-- The navbar -->
<div class="navbar" id="examples"></div>
<!-- The sidebar -->
<div class="sidebar">
    <a class="active" id="question" onClick='changePage(this.id)'><i class="fas fa-question fa-3x"></i>Question</a>
    <a id="answer" onClick='changePage(this.id)'><i class="fas fa-lightbulb fa-3x"></i>Answer</a>
    <a id="video" onClick='changePage(this.id)'><i class="fas fa-video fa-3x"></i>Solution</a>
</div>
<!-- The Logo -->
<div class="logo">
    <img src="img/logo.png" />
</div>
<div class="content" id="content"></div>
</body>
<script src="js/script.js"></script>

</html>