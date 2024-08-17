document.addEventListener('alpine:init', () => {
  Alpine.data('alpinejs', () => ({
    init() {
      // START: data collection
      // const body = document.body
      // const dataId = body.getAttribute('data-id')
      // const key = `page-${dataId}`
      // const existingData = localStorage.getItem(key)
      // let data

      // if (existingData) {
      //   data = JSON.parse(existingData)
      //   data.counter += 1 // Increment the counter
      // } else {
      //   // Initialize data if it doesn't exist
      //   data = {
      //     url: body.getAttribute('data-url'),
      //     context: body.getAttribute('data-context'),
      //     counter: 1,
      //   }
      // }
      // this.saveToLocalStorage(key, data)
      // END: data collection
      // CREATE: custom events
      this.setupEventListeners()
    },

    // setupEventListeners() {
    //   window.addEventListener('keydown', (event) => {
    //     if (event.ctrlKey && event.key === 'k') {
    //       event.preventDefault()
    //       this.toggleAdminbar()
    //     }
    //   })

    //   // Listener for click events on #admin
    //   const adminElement = document.getElementById('admin')
    //   if (adminElement) {
    //     adminElement.addEventListener('click', () => {
    //       this.toggleAdminbar()
    //     })
    //   }
    // },

    // adminbar management
    adminbarVisible: false,
    toggleAdminbar() {
      this.adminbarVisible = !this.adminbarVisible
    },
    // Functions for data collection
    // saveToLocalStorage(key, data) {
    //   localStorage.setItem(key, JSON.stringify(data))
    // },
    // getCounter() {
    //   const body = document.body
    //   const dataId = body.getAttribute('data-id')
    //   const key = `page-${dataId}`
    //   const existingData = localStorage.getItem(key)

    //   if (existingData) {
    //     const data = JSON.parse(existingData)
    //     return data.counter
    //   }
    // },

    // image usage instructions
    // showInstructions: false,
    // toggleInstructions() {
    //   this.showInstructions = !this.showInstructions
    // },

    // // sidebar management
    // showSidebar: false,
    // toggleSidebar() {
    //   this.showSidebar = !this.showSidebar
    // },
  }))
})
