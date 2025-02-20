<template>
  <div>
    <h1>Downloads</h1>
    <p>This is the Downloads page.</p>
  </div>
</template>

<script>
export default {
  name: 'DownloadsView'
}
</script>

<style scoped>
/* Add your styles here */
</style>
<!-- 
<template>
  <div>
    <h1>Downloads</h1>
    <div v-if="torrents.length === 0">
      <p>No torrents found.</p>
    </div>
    <div v-else>
      <div v-for="torrent in torrents" :key="torrent.infoHash" class="torrent">
        <h3>{{ torrent.name }}</h3>
        <p>Progress: {{ (torrent.progress * 100).toFixed(2) }}%</p>
        <p>Download Speed: {{ formatSpeed(torrent.downloadSpeed) }}</p>
        <p>Upload Speed: {{ formatSpeed(torrent.uploadSpeed) }}</p>
        <progress :value="torrent.progress" max="1"></progress>
      </div>
    </div>
  </div>
</template>

<script>
import WebTorrent from 'webtorrent';
import fs from 'fs';
import path from 'path';

export default {
  name: 'DownloadsView',
  data() {
    return {
      torrents: [],
      client: new WebTorrent(),
    };
  },
  async created() {
    await this.loadTorrents();
  },
  methods: {
    async loadTorrents() {
      // Load torrent files from a GitHub repo (example URL)
      const torrentUrls = [
        'https://github.com/yourusername/yourrepo/raw/main/torrents/example1.torrent',
        'https://github.com/yourusername/yourrepo/raw/main/torrents/example2.torrent',
      ];

      for (const url of torrentUrls) {
        const torrent = this.client.add(url, { path: this.getDownloadPath('Falling') });
        torrent.on('download', () => this.updateTorrents());
        torrent.on('done', () => this.moveTorrent(torrent));
      }
    },
    getDownloadPath(folder) {
      const downloadsPath = path.join(require('os').homedir(), 'Downloads', 'Datascribe', 'Rain', folder);
      if (!fs.existsSync(downloadsPath)) {
        fs.mkdirSync(downloadsPath, { recursive: true });
      }
      return downloadsPath;
    },
    moveTorrent(torrent) {
      const sourcePath = torrent.path;
      const destinationPath = this.getDownloadPath('Puddles');
      fs.renameSync(sourcePath, path.join(destinationPath, torrent.name));
      this.updateTorrents();
    },
    updateTorrents() {
      this.torrents = this.client.torrents;
    },
    formatSpeed(speed) {
      if (speed < 1024) return `${speed} B/s`;
      if (speed < 1024 * 1024) return `${(speed / 1024).toFixed(2)} KB/s`;
      return `${(speed / (1024 * 1024)).toFixed(2)} MB/s`;
    },
  },
};
</script>

<style scoped>
.torrent {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
progress {
  width: 100%;
}
</style> -->
