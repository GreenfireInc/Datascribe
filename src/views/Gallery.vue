<template>
  <div>
    <h1>Gallery</h1>
    <p>This is the Gallery page.</p>
  </div>
</template>

<script>
export default {
  name: 'GalleryView'
}
</script>

<style scoped>
/* Add your styles here */
</style>

<!-- 

<template>
  <div>
    <h1>Gallery</h1>
    <div v-if="files.length === 0">
      <p>No files found.</p>
    </div>
    <div v-else>
      <div v-for="file in files" :key="file" class="file">
        <img v-if="isImage(file)" :src="getFileUrl(file)" alt="File" />
        <video v-else-if="isVideo(file)" :src="getFileUrl(file)" controls></video>
        <p>{{ file }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import fs from 'fs';
import path from 'path';

export default {
  name: 'GalleryView',
  data() {
    return {
      files: [],
    };
  },
  async created() {
    await this.loadFiles();
  },
  methods: {
    async loadFiles() {
      const puddlesPath = path.join(require('os').homedir(), 'Downloads', 'Datascribe', 'Rain', 'Puddles');
      if (fs.existsSync(puddlesPath)) {
        this.files = fs.readdirSync(puddlesPath);
      }
    },
    getFileUrl(file) {
      const puddlesPath = path.join(require('os').homedir(), 'Downloads', 'Datascribe', 'Rain', 'Puddles');
      return path.join(puddlesPath, file);
    },
    isImage(file) {
      return /\.(jpg|jpeg|png|gif)$/i.test(file);
    },
    isVideo(file) {
      return /\.(mp4|webm|ogg)$/i.test(file);
    },
  },
};
</script>

<style scoped>
.file {
  margin-bottom: 20px;
}
img, video {
  max-width: 100%;
  height: auto;
}
</style>  -->
