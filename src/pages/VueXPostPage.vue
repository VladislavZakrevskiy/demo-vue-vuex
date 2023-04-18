
<template>
    <div>
      <TextField
        :model-value="searchValue"
        @update:model-value="setSearchValue"
      />
      <div class="app_btns">
        <Button @click="show">CreatePost</Button>
        <div class="app_btns_choose">
          <Choose 
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
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
    import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'    

    export default {
      components: {
        PostForm, PostList
      },
      data() {
        return {
          visible: false,

        }
      },
  
      methods: {
        ...mapActions({
            fetchPosts: 'fetchPosts'
        }),
        ...mapGetters({
        
        }),
        ...mapMutations({
            setPage: 'setPage',
            setSearchValue: 'setSearchValue',
            setSelectedSort: 'setSelectedSort'
        }),
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
        
  
      },
  
      mounted() {
        this.fetchPosts('reload')
        
      },
  
      watch: {
        selectedLimit() {
          this.limit = +this.selectedLimit
          this.fetchPosts('reload')
        }
      },  
  
      computed: {
        ...mapState({
            posts: state => state.post.posts,
            postLoading: state => state.post.postLoading,
            selectedSort: state => state.post.selectedSort,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            selectedLimit: state => state.post.selectedLimit,
            limitedOptions: state => state.post.limitedOptions,
            sortedOptions: state => state.post.sortedOptions,
            searchValue: state => state.post.searchValue
        }),
        ...mapGetters({
            sortedPosts: 'sortedPosts',
            sortedAndSearchedPosts: 'sortedAndSearchedPosts'
        })
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
  