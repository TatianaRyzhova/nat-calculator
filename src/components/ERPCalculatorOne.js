import React, { useState } from 'react';
import '../App.css';

function ERPCalculatorOne() {
    const [number, setNumber] = useState({
        XНК: '',
        XНР: '',
        XГСД: '',
        XВ: '',
        XИМТ: '',
        XОК: ''
    });

    const [result, setResult] = useState('');
    const [submitted, setSubmitted] = useState(false);


    function handleChange(event) {
        const input = event.target;
        const name = input.name;
        const value = input.value;
        setNumber({
          ...number,
          [name]: value
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);

        const e = 2.718;  // The base of natural logarithms
        const hnk = 5.714 * Number(number.XНК);
        const hnp = 3.234 * Number(number.XНР);
        const hgsd = 2.468 * Number(number.XГСД);
        const hv = 2.240 * Number(number.XВ);
        const himt = 0.381 * Number(number.XИМТ);
        const hok = 0.008 * Number(number.XОК);

        const z = hnk + hnp + hgsd + hv + himt + hok -19.028;
        const P = 1 / (1 + Math.pow(e, z));
        setResult(P);

        setSubmitted(false);
      }

    
    return (
        <div className="container">
            <h1>Рассчет ЕРП</h1>
            <p>Р = 1 / (1 + е<sup>z</sup>)</p>
            <p>z = 5,714 * Х<sub>НК</sub> + 3,234 * X<sub>НР</sub> + 2,468 * Х<sub>ГСД</sub> + 2,240 * Х<sub>В</sub> + 0,381 * Х<sub>ИМТ</sub> + 0,008 * Х<sub>ОК</sub> – 19,028</p>
            <p>где:</p>
            <ul>
                <li>Р – вероятность развития послеродового эндометрита после родов через ЕРП в долях единицы</li>
                    <li>е – математическая постоянная = 2,718,</li>
                    <li>Х<sub>НК</sub> – наличие нелеченого кариеса (0 – нет нелеченного кариеса, 1 – есть нелеченный кариес)</li>
                    <li>X<sub>НР</sub> - начало родов (1 – самостоятельное развитие родовой деятельности, 2 – программированные роды)</li>
                    <li>Х<sub>ГСД</sub> – наличие гестационного сахарного диабета, диагностированного во время беременности (0 – отсутствие ГСД во время беременности, 1 – наличие ГСД во время беременности)</li>
                    <li>Х<sub>В</sub> - наличие вирусных заболеваний во время беременности (0 вирусных заболеваний во время беременности у пациентки не было, 1 – во время беременности пациентка перенесла вирусные заболевания)</li>
                    <li>Х<sub>ИМТ</sub> - индекс массы тела пациентки на момент наступления беременности (кг/м<sup>2</sup>)</li>
                    <li>Х<sub>ОК</sub> – объем кровопотери в родах (мл)</li>
            </ul>

            <form onSubmit={handleSubmit}>
                <div className="tables">
                    <table>
                        <tbody>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>НК</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        placeholder="0...1"
                                        name="XНК"
                                        onChange={handleChange}
                                        value={number.XНК}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th style={{width: "220px"}}>X<sub>НР</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        placeholder="1...2"
                                        name="XНР"
                                        onChange={handleChange}
                                        value={number.XНР}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>ГСД</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        placeholder="0...1"
                                        name="XГСД"
                                        onChange={handleChange}
                                        value={number.XГСД}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>В</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        placeholder="0...1"
                                        name="XВ"
                                        onChange={handleChange}
                                        value={number.XВ}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>ИМТ</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="XИМТ"
                                        onChange={handleChange}
                                        value={number.XИМТ}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>ОК</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="XОК"
                                        onChange={handleChange}
                                        value={number.XОК}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                        </tbody>   
                    </table>
                </div>
                <button type="submit">РАССЧИТАТЬ</button>
            </form>
            <div className="result">
                Результат:
                <span className={result >= 0.472 ? 'result-red' : 'result-green'}> {result}</span>
                <p className="information">{'Р ≥ 0,472 - риск развития эндометрита считается высоким.'}</p>
            </div>
        </div>
    );
}

export default ERPCalculatorOne;
