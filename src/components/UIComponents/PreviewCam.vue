<template>
    <div>
      
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "faceReg",
  data() {
    return {
      faceid: ""
    };
  },
  methods: {
    ...mapActions(["setMenu", "setStep", "setData", "setFaceID"]),
    startCameraAbove: function() {
      CameraPreview.startCamera({
        x: 50,
        y: 50,
        width: 819,
        height: 614,
        toBack: false,
        previewDrag: false,
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
        /*FACEREG API
        if faceID != null
          this.setFaceID("FACEID");
          this.setMenu("passcode");
          this.setStep("4");
        else
          show alert message and instruction
          retake picture
        */
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
  computed: {
    ...mapGetters(["isMenu", "isStep", "getData"])
  },
  mounted() {
    //this.show()
    // this.startCameraAbove();
    // setTimeout(() => {
    //   this.stopCamera();
    //   this.setMenu("passcode");
    //   this.setStep("4");
    // }, 3000);

    this.setMenu("passcode");
    this.setStep("4");
  }
};
</script>

<style scoped>
</style>
