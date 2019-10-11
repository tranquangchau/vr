
<html>

<head>
    <meta charset="utf-8" />
    <title>Jabue Studio | View your VR anywhere</title>
    <script src="library/aframe-v0.7.1.js"></script>
    <script src="library/camera-velocity-component.js"></script>
    <script src="library/Auto-rotate.js"></script>
    <script src="library/pace.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/pace.css">
    <style type="text/css">
    .a2a_svg,
    .a2a_count {
        border-radius: 0 !important;
    }
    </style>
</head>

<body>
    <a-scene camera-velocity>
        <a-sky id="sky" src=""></a-sky>
        <a-camera id="camera" look-controls="enabled: true" zoom="0.75" wasd-controls-enabled="false" reverse-mouse-drag="true" auto-rotate="true"></a-camera>
    </a-scene>
    <!-- AddToAny BEGIN -->
    <div style="position: fixed; top: 10px; right: 0">
        <div class="container-fluid">
            <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
                <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
                <a class="a2a_button_facebook"></a>
                <a class="a2a_button_twitter"></a>
                <a class="a2a_button_google_plus"></a>
                <a class="a2a_button_wechat"></a>
                <a class="a2a_button_sina_weibo"></a>
            </div>
        </div>
    </div>
    <script src="js/page.js"></script>
    <!--script async src="https://static.addtoany.com/menu/page.js"></script-->
    <!-- AddToAny END -->
    <!-- <script src="library/ajax-loading.js"></script> -->
    <script src="js/main.js"></script>
    
</body>

</html>