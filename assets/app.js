function hideOverlay() {
    console.log('Closing Overlay')
    document.querySelector('.transparent-overlay').classList.add('hide-overlay')

}


document.querySelector('.cross-btn').addEventListener('click', hideOverlay)
setTimeout(()=> {
    document.querySelector('.transparent-overlay').classList.add('remove')


}, 1000 * 5)