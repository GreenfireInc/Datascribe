<template>
  <div>
    <h1>Devices</h1>
    <p>List of USB Drives:</p>
    <!-- <ul>
      <li v-for="drive in drives" :key="drive.path">
        {{ drive.name }} ({{ drive.path }})
      </li>
    </ul>
    <button @click="refreshDrives">Refresh</button> -->
  </div>
</template>

<!-- /* 
<script>
import { detectUSBDrives } from '@/utils/usbDetector';

export default {
  name: 'DevicesView',
  data() {
    return {
      drives: [],
    };
  },
  async created() {
    await this.refreshDrives();
  },
  methods: {
    async refreshDrives() {
      try {
        this.drives = await detectUSBDrives();
      } catch (error) {
        console.error('Failed to detect USB drives:', error);
      }
    },
  },
};
</script>

<style scoped>
Add your styles here 
</style> */ -->

<script>
//import { detectUSBDrives } from '@/utils/usbDetector'; // Correct import

export default {
  name: 'DevicesView'
  // data() {
  //   return {
  //     drives: [],
  //   };
  // },
  // async created() {
  //   console.log('Devices component created');
  //   await this.refreshDrives();
  // },
  // methods: {
  //   async refreshDrives() {
  //     console.log('Refreshing drives...');
  //     try {
  //       this.drives = await detectUSBDrives();
  //       console.log('Drives:', this.drives);
  //     } catch (error) {
  //       console.error('Failed to detect USB drives:', error);
  //     }
  //   },
  // },
}
</script>
