
import { LitElement, html, css } from 'lit-element';

export class CircularText extends LitElement {

    static get properties() {
        return {
            radius: Number,
            text: String,
            rotationSpeed: Number,
        };
    }

    static get styles() {
        return css`
            @-webkit-keyframes rotating { /* Safari and Chrome */ 
                from {
                    -webkit-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                }
                to {
                    -webkit-transform: rotate(360deg);
                    -o-transform: rotate(360deg);
                    transform: rotate(360deg);
                }
            }
            
            @keyframes rotating {
                from {
                    -ms-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -webkit-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                }
                to {
                    -ms-transform: rotate(360deg);
                    -moz-transform: rotate(360deg);
                    -webkit-transform: rotate(360deg);
                    -o-transform: rotate(360deg);
                    transform: rotate(360deg);
                }
            }

            ::slotted(*) {
                display: none;
                visibility: hidden;
            }

            .circle {
                display: block;
                position: relative;
                padding: 0;
                margin: 0;
                animation: rotating 10s linear infinite;
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

    updated(changedProps) {
        super.updated(changedProps);
        this.style.setProperty('--rotation-speed', this.rotationSpeed);
    }

    render() {
        return html`
        <slot></slot>

        <div class="circle" style="height: ${this.radius * 2}px; width: ${this.radius * 2}px">
            ${this._renderText()}
        </div>`;
    }

    _renderText() {
        const letters = this.text.split('');
        const rotationBetweenLetters = 360 / letters.length;
        let origin = 0;
        let template = html``;
        for (let letter of letters) {
            const letterElement = html`<p style='height:${this.radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%;'>${letter}</p>`;
            origin += rotationBetweenLetters;
            template = html`${template}${letterElement}`;
        }
        return template;
    }


}