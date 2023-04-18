import axios from "axios"

export const postSlice = {
    state: () => ({
        posts: [],
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
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((a,b) => a[state.selectedSort]?.localeCompare(b[state.selectedSort]))
          },
    
          sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post?.title?.toLowerCase().includes(state.searchValue.toLowerCase()))
          }
    },
    mutations: {
        setPosts(state, action) {
            state.posts = action
        },
        setPostsLoading(state, action) {
            state.postsLoading = action
        },
        setSelectedSort(state, action) {
            state.selectedSort = action
        },
        setLimit(state, action) {
            state.limit = action
        },
        setTotalPages(state, action) {
            state.totalPages = action
        },
        setSelectedLimit(state, action) {
            state.selectedLimit = action
        },
        setLimitedOptions(state, action) {
            state.limitedOptions = action
        },
        setSearchValue(state, action) {
            state.searchValue = action
        },
    },
    actions: {
        async fetchPosts({state,commit,dispatch}, type = 'reload') {
            try {
              commit('setPostsLoading', true)
              if(type === 'more') {
                this.page += 1
              }
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                  _page: state.page,
                  _limit: state.limit
                }
              })
              commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
              if (type === 'more') {
                commit('setPosts', [...state.posts, ...response.data])
              }
              if (type === 'reload') {
                commit('setPosts',response.data)
              }
            } catch (e) {
              console.log(e)
            } finally {
                commit('setPostsLoading', false)
            }
          },
    }
}