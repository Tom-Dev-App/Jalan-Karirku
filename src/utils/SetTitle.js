export default function SetTitle(title){
    const titleNode = document.head.querySelector('title')
    // This will also re-render the component
    return titleNode.innerText = title
}