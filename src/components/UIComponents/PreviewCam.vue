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
      CameraPreview.takePicture(async imageURI => {
        try {
          this.hide();
          console.log(imageURI);
          var base64str = imageURI.toString();
          var binary = atob(base64str.replace(/\s/g, ""));
          var len = binary.length;
          var buffer = new ArrayBuffer(len);
          var view = new Uint8Array(buffer);
          for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
          }
          var blob = new Blob([view], { type: "image/jpeg" });
          var timestamp = Number(new Date());
          var photoRef = this.$storage.child("photos/" + timestamp + ".jpeg");
          const upload = await photoRef.put(blob);
          console.log("UPLOAD");
          console.log(upload);
          const download = await photoRef.getDownloadURL();
          console.log("DOWNLOAD");
          console.log(download);

          var facedetect = {
            url:
              "https://southeastasia.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false",
            data: {
              url: photoUrl
            },
            headers: {
              "Ocp-Apim-Subscription-Key": "863c391b338e49e7995d2fdeb9a4477c"
            }
          };

          const face = await axios(facedetect);
          console.log("FACE" + JSON.stringify(face));
          if (this.isOpen == true) {
            /*
            
          */
          } else {
            /*FACEREG API  
          if faceID != null
            this.setFaceID("FACEID");
            this.setMenu("passcode");
            this.setStep("4");
          else
            show alert message and instruction
            retake picture
        */
          }

          // photoRef.put(blob).then(function(snapshot) {
          //   photoRef.getDownloadURL().then(function(url) {

          //   });
          // });
        } catch (error) {
          console.log("ERROR");
          console.log(error)
        }
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
    ...mapGetters(["isMenu", "isStep", "getData", "isOpen"])
  },
  mounted() {
    this.show();
    this.startCameraAbove();
    setTimeout(() => {
      this.takePicture();
    }, 3000);
  }
};
</script>

<style scoped>
</style>
