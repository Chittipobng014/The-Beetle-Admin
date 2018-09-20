<template>
    
</template>

<script>
export default {
  name: "previewcam",  
  data() {
    return {
      faceid: "",
      state: 'standby'
    };
  },
  methods: {
    startCameraAbove: function() {
      CameraPreview.startCamera({
        x: 50,
        y: 50,
        width: 819,
        height: 614,
        toBack: false,
        previewDrag: true,
        tapPhoto: true
      });
    },
    startCameraBelow: function() {
      CameraPreview.startCamera({
        x: 50,
        y: 50,
        width: 300,
        height: 300,
        camera: "front",
        tapPhoto: true,
        previewDrag: false,
        toBack: true
      });
    },
    stopCamera: function() {
      CameraPreview.stopCamera();
    },
    takePicture: function() {
      CameraPreview.takePicture(function(imgData) {
        console.log(imgData);
      });
    },
    switchCamera: function() {
      CameraPreview.switchCamera();
    },
    show: function() {
      CameraPreview.show();
    },
    hide: function() {
      CameraPreview.hide();
    },
    changeColorEffect: function() {
      var effect = document.getElementById("selectColorEffect").value;
      CameraPreview.setColorEffect(effect);
    },
    changeFlashMode: function() {
      var mode = document.getElementById("selectFlashMode").value;
      CameraPreview.setFlashMode(mode);
    },
    changeZoom: function() {
      var zoom = document.getElementById("zoomSlider").value;
      document.getElementById("zoomValue").innerHTML = zoom;
      CameraPreview.setZoom(zoom);
    },
    changePreviewSize: function() {
      window.smallPreview = !window.smallPreview;
      if (window.smallPreview) {
        CameraPreview.setPreviewSize({ width: 100, height: 100 });
      } else {
        CameraPreview.setPreviewSize({
          width: window.screen.width,
          height: window.screen.height
        });
      }
    },
    showSupportedPictureSizes: function() {
      CameraPreview.getSupportedPictureSizes(function(dimensions) {
        dimensions.forEach(function(dimension) {
          console.log(dimension.width + "x" + dimension.height);
        });
      });
    }
  },
  beforeMount() {
    this.startCameraAbove();
  },
  mounted() {
    //this.hide();
  },
  watch:{
    state: function(payload){
      if (payload == 'process') {
        this.show();
        setTimeout(() => {
          CameraPreview.takePicture(function(imgData) {
            //face reg then set state to done
          });
        }, 10000);
      }
    }
  }
};
</script>

<style scoped>
</style>
