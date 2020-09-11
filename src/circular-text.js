
import { LitElement, html, css } from 'lit-element';

export class CircularText extends LitElement {

    static get properties() {
        return {
            radius: Number,
            text: String,
        };
    }

    static get styles() {
        return css`
            .circle {
                display: block;
                position: relative;
                padding: 0;
                margin: 0;
            }
            .circle * {
                margin: 0;
                left: 50%;
            }
        `;
    }

    constructor() {
        super();
        this.radius = 100;
        this.rotationSpeed = 0;
    }

    render() {
        return html`
        <div 
            class="circle" 
            style="height: ${this.radius * 2}px; width: ${this.radius * 2}px">
            ${this._renderText()}
        </div>`;
    }

    _renderText() {
        const letters = this.text.split('');
        const rotationBetweenLetters = 360 / letters.length;
        let origin = 0;
        let template = html``;
        for (let letter of letters) {
            const letterElement = html`<p style='
                height:${this.radius}px;
                position:absolute; 
                transform:rotate(${origin}deg); 
                transform-origin:0 100%;
            '>${letter}</p>`;
            origin += rotationBetweenLetters;
            template = html`${template}${letterElement}`;
        }
        return template;
    }


}