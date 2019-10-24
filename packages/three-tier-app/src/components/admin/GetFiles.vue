<template>
  
      <!-- <b-button  @click="getUserFiles">Refresh</b-button> -->
  <b-card>
     <p> User Files</p>
      <!-- <b-table :items="getUserFiles" :busy="isBusy" class="mt-4" outlined> -->
      <b-table :items="getUserFiles" class="mt-4" outlined>
         
        <template v-slot:table-busy>
            <div class="text-center text-danger my-2">
             <b-spinner class="align-middle"></b-spinner>
              <strong>Loading...</strong>
            </div>
         </template>
        </b-table>
  
    </b-card>
</template>


<script>
import { getAllFiles } from '@/services';
export default {
   data: () => ({
      files: {
            id: '',
            fileName: '',
            fileURL: '',
            fileDescription:'',
            createdAt:'',
            updatedAt:'',
            userId: ''
            },
    }),
    // data2() {
    //   return {
    //     isBusy: false,
    //     items: [
    //       { id:1, file_name: 'Dickerson', fileURL: 'MacDonald', fileDescription: 40, createdAt: "02/19/19", updatedAt: "10/20/19"  },
    //       { id:2, file_name: 'Dickerson', fileURL: 'MacDonald', fileDescription: 40, createdAt: "02/19/19", updatedAt: "10/20/19"},
    //       { id:3, file_name: 'Larsen', fileURL: 'Shaw', fileDescription: 21, createdAt: "02/19/19", updatedAt: "10/20/19"},
    //       { id:4, file_name: 'Geneva', fileURL: 'Wilson', fileDescription: 89, createdAt: "02/19/19", updatedAt: "10/20/19"},
    //       { id:5, file_name: 'Jami', fileURL: 'Carney', fileDescription: 38, createdAt: "02/19/19", updatedAt: "10/20/19" }
    //     ]
    //   }
    // },
    methods: {
      // toggleBusy() {
      //   this.isBusy = !this.isBusy
      // }
        async getUserFiles() {
            try{
                const response = await getAllFiles(this.files);
                this.files.id = response.getAllFiles.id;
                this.files.fileName = response.getAllFiles.fileName;
                this.file.fileURL = response.getAllFiles.fileURL;
                this.file.fileDescription = response.getAllFiles.fileDescription;
                this.file.createdAt = response.getAllFiles.createdAt;
                this.file.updatedAt = response.getAllFiles.updatedAt;
                this.file.userId = response.getAllFiles.userId;
                console.log(response.data);
                // this.$store.dispatch('auth/setLoggedIn', {isLoggedIn: true, user: response.data.user, accessToken: response.data.accessToken});
                // this.$router.push('admin');
            }catch(err) {
                console.log(err.response);
            }
        },
    }
  }
</script>