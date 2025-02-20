<!-- <template>
  <div>
    <h1>Verify</h1>
    <p>This is the Verify page.</p>
  </div>
</template>

<script>
export default {
  name: 'VerifyView'
}
</script>

<style scoped>
/* Add your styles here */
</style> -->

<template>
  <div>
    <h1>Verify ISO File</h1>
    <div>
      <input type="file" @change="handleFileSelect" accept=".iso" />
      <p v-if="selectedFile">Selected File: {{ selectedFile.name }}</p>
    </div>
    <div>
      <label for="checksum-type">Checksum Type:</label>
      <select id="checksum-type" v-model="selectedChecksumType">
        <option value="md5">MD5</option>
        <option value="sha256">SHA-256</option>
      </select>
    </div>
    <div>
      <label for="checksum">Checksum:</label>
      <input
        type="text"
        id="checksum"
        v-model="userChecksum"
        :placeholder="`Enter ${selectedChecksumType.toUpperCase()} checksum`"
      />
      <button
        @click="verifyChecksum"
        :disabled="!selectedFile || !userChecksum"
      >
        Verify
      </button>
    </div>
    <div v-if="verificationResult !== null">
      <p v-if="verificationResult" style="color: green">Checksum matches!</p>
      <p v-else style="color: red">Checksum does not match.</p>
    </div>
  </div>
</template>

<script>
import crypto from 'crypto'
import fs from 'fs'

export default {
  name: 'VerifyView',
  data() {
    return {
      selectedFile: null,
      selectedChecksumType: 'md5', // Default to MD5
      userChecksum: '',
      verificationResult: null
    }
  },
  methods: {
    handleFileSelect(event) {
      const file = event.target.files[0]
      if (file) {
        this.selectedFile = file
        this.verificationResult = null // Reset verification result
      }
    },
    async verifyChecksum() {
      if (!this.selectedFile || !this.userChecksum) return

      try {
        const fileBuffer = await this.readFile(this.selectedFile.path)
        const fileChecksum = this.calculateChecksum(
          fileBuffer,
          this.selectedChecksumType
        )

        this.verificationResult =
          fileChecksum === this.userChecksum.toLowerCase()
      } catch (error) {
        console.error('Error verifying checksum:', error)
        this.verificationResult = false
      }
    },
    readFile(filePath) {
      return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
          if (err) reject(err)
          else resolve(data)
        })
      })
    },
    calculateChecksum(buffer, type) {
      if (type === 'md5') {
        return crypto.createHash('md5').update(buffer).digest('hex')
      } else if (type === 'sha256') {
        return crypto.createHash('sha256').update(buffer).digest('hex')
      } else {
        throw new Error('Unsupported checksum type')
      }
    }
  }
}
</script>

<style scoped>
div {
  margin-bottom: 20px;
}
input[type='file'] {
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
}
</style>
