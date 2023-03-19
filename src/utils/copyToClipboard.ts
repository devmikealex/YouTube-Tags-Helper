export default function copyToClipboard(text: string): void {
    if (navigator.clipboard) {
        console.info('Text copied to navigator.clipboard')
        navigator.clipboard.writeText(text)
        return
    }
    console.info('Text copied to clipboard (old)')
    const copyTextArea = document.createElement('textarea')
    copyTextArea.value = text
    document.body.appendChild(copyTextArea)
    // copyTextArea.focus()
    copyTextArea.select()
    // copyTextArea.setSelectionRange(0, 99999)
    document.execCommand('copy')
    document.body.removeChild(copyTextArea)
}
