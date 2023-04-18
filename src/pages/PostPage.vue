
<template>
    <div>
      <TextField
        v-model="searchValue"
      />
      <div class="app_btns">
        <Button @click="show">CreatePost</Button>
        <div class="app_btns_choose">
          <Choose 
            v-model="selectedSort"
            :options="sortedOptions"
          />
          <Choose
            v-model="selectedLimit"
            :options="limitedOptions"
          />
        </div>
      </div>
      <Modal v-model:show="visible" >
        <PostForm @create="createPost"/>
      </Modal>
      <PostList 
        :posts = "sortedAndSearchedPosts" 
        @remove="removePost"
        v-if="!postLoading"
        />
        <h1 v-else>Loading</h1>
        <div v-intersection="fetchPosts" ref="observer" class="observer"/>
    </div>
  </template>
  
  <script>
    import PostForm from '../components/PostForm.vue'
    import PostList from '../components/PostList.vue'
    import axios from 'axios'
  
    export default {
      components: {
        PostForm, PostList
      },
      data() {
        return {
          posts: [],
          visible: false,
          postLoading: false,
          selectedSort: '',
          page: 1,
          limit: 10,
          totalPages: 0,
          selectedLimit: '',
          limitedOptions: [
            {value: '5', name: 'Five'},
            {value: '10', name: 'Ten'},
            {value: '20', name: 'Twenty'},
            {value: '-1', name: 'All'}
          ],
          sortedOptions: [
            {value: 'title', name: "By Title"},
            {value: 'body', name: "By Body"}
          ],
          searchValue: ''
        }
  
      },
  
      methods: {
        createPost(post) {
          this.posts.push(post)
          this.visible = false
        },
        removePost(post) {
          this.posts = this.posts.filter(a => a.id !== post.id)  
        },
        show() {
          this.visible = true
        },
        async fetchPosts(type = 'reload') {
          try {
            if(type === 'more') {
              this.page += 1
            }
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _page: this.page,
                _limit: this.limit
              }
            })
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
            if (type === 'more') {
              this.posts = [...this.posts, ...response.data]
            }
            if (type === 'reload') {
              this.posts = response.data
            }
          } catch (e) {
            console.log(e)
          } finally {
  
          }
        },
  
      },
  
      mounted() {
        this.fetchPosts()
        
      },
  
      watch: {
        selectedLimit() {
          this.limit = +this.selectedLimit
          this.fetchPosts('reload')
        }
      },  
  
      computed: {
        sortedPosts() {
          return [...this.posts].sort((a,b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
        },
  
        sortedAndSearchedPosts() {
          return this.sortedPosts.filter(post => post?.title?.toLowerCase().includes(this.searchValue))
        }
      }
    }
  </script>
  
  <style>
    .app_btns {
      display: flex;
      justify-content: space-between;
    }
    .page {
      border: 1px solid black;
      padding: 10px;
    } 
    .current-page {
      border: 2px solid teal;
    }
    .page_wrapper {
      display: flex;
      margin-top: 15px;
  
    }
  </style>
  