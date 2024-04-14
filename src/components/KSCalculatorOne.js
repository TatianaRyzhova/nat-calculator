import React, { useState } from 'react';
import '../App.css';

function KSCalculatorOne() {
    const [number, setNumber] = useState({
        ХСК: '',
        XНР: '',
        XОК: '',
        XНК: '',
        XИМТ: '',
        XГ: '',
        ХПБ: '',
        ХММ: ''
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
        const hsk = 2.326 * Number(number.ХСК);
        const hnp = 0.098 * Number(number.XНР);
        const hok = -0.002 * Number(number.XОК);
        const hnk = 1.709 * Number(number.XНК);
        const himt = 0.12 * Number(number.XИМТ);
        const hg = 0.825 * Number(number.XГ);
        const hpb = 0.246 * Number(number.ХПБ);
        const hmm = -4.142 * Number(number.ХММ)

        const z = hsk +  hnp + hok + hnk + himt + hg + hpb + hmm - 3.960;
        const P = 1 / (1 + Math.pow(e, z));
        setResult(P);

        setSubmitted(false);
      }

    
    return (
        <div className="container">
            <h1>Рассчет КС</h1>
            <p>Р = 1 / (1 + е<sup>z</sup>)</p>
            <p>z = 2,326 * Х<sub>СК</sub> + 0,098 * Х<sub>НР</sub> + (-0,002) * Х<sub>ОК</sub> + 1,709 * Х<sub>НК</sub> + 0,12 * Х<sub>ИМТ</sub> + 0,825 * Х<sub>Г</sub> + 0,246 * Х<sub>ПБ</sub> + (-4,142) * Х<sub>ММ</sub> - 3,960</p>
            <p>где:</p>
            <ul>
                <li>Р – вероятность развития послеродового эндометрита после КС в долях единицы</li>
                    <li>е – математическая постоянная = 2,718</li>
                    <li>Х<sub>СК</sub> – срочность оперативного родоразрешения (1 – экстренная операция, 2 – плановая операция)</li>
                    <li>X<sub>НР</sub> - начало родов (0 – регулярной родовой деятельности не было, плановая операция, 1 – самостоятельное развитие родовой деятельности, 2 – программированные роды)</li>
                    <li>Х<sub>ОК</sub> – объем кровопотери в родах (мл)</li>
                    <li>Х<sub>НК</sub> – наличие нелеченого кариеса (0 – нет нелеченного кариеса, 1 – есть нелеченный кариес)</li>
                    <li>Х<sub>ИМТ</sub> - индекс массы тела пациентки на момент наступления беременности (кг/м<sup>2</sup>)</li>
                    <li>Х<sub>Г</sub> – наличие госпитализаций во время беременности (0 – госпитализаций не было, 1 – госпитализации были)</li>
                    <li>Х<sub>ПБ</sub> - наличие прерываний беременности до 12 недель гестации в анамнезе (0 –прерывания беременности в анамнезе были, 1 – прерываний беременности в анамнезе не было)</li>
                    <li>Х<sub>ММ</sub> – наличие миомы матки (0 – миомы матки нет, 1 – миома матки есть)</li>
            </ul>

            <form onSubmit={handleSubmit}>
                <div className="tables">
                    <table>
                        <tbody>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>СК</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        placeholder="1...2"
                                        name="ХСК"
                                        onChange={handleChange}
                                        value={number.ХСК}
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
                                        placeholder="0...1...2"
                                        name="XНР"
                                        onChange={handleChange}
                                        value={number.XНР}
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
                                <th style={{width: "220px"}}>Х<sub>Г</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        placeholder="0...1"
                                        name="XГ"
                                        onChange={handleChange}
                                        value={number.XГ}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>ПБ</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        placeholder="0...1"
                                        name="ХПБ"
                                        onChange={handleChange}
                                        value={number.ХПБ}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>ММ</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        placeholder="0...1"
                                        name="ХММ"
                                        onChange={handleChange}
                                        value={number.ХММ}
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
                <span className={result >= 0.403 ? 'result-red' : 'result-green'}> {result}</span>
                <p className="information">{'Значение логистической функции Р в точке cut-off составляло 0,403:'}</p>
                <p className="information">{'Р < 0,403 - редполагается развитие послеродового эндометрита.'}</p>
                <p className="information">{'Р ≥ 0,403 - риск развития эндометрита считается высоким.'}</p>
            </div>
        </div>
    );
}

export default KSCalculatorOne;
