export class ScoreBoard extends HTMLElement {
  connectedCallback() {
    this.textContent = 'Score : 0'
  }
  
  disconnectedCallback() { /* retiré : nettoyer timers et écouteurs */ }
  
  adoptedCallback() { /* déplacé vers un autre document, rare */ }
  
  static readonly observedAttributes = ['value', 'label'] as const
  
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'value') this.render()
    if (name === 'label') this.render()
  }
  
  private render() {
    const label = this.getAttribute('label') ?? 'Score'
    const value = Number(this.getAttribute('value') ?? 0)
    this.textContent = `${label} : ${value}`
  }
  
  get value(): number { return Number(this.getAttribute('value') ?? 0) }
  set value(v: number) { this.setAttribute('value', String(v)) } // « reflète » vers l'attribut
}
customElements.define('score-board', ScoreBoard)

