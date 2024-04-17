import React, { useState } from 'react';
import '../App.css';


function ERPCalculatorTwo() {
const [number, setNumber] = useState({
    Хгем: '',
    Хлей: '',
    Хлим: '',
    Хней: ''
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

    const hgem = 0.053 * Number(number.Хгем);
    const hney = 0.185 * Number(number.Хней);
    const hlim = 0.376 * Number(number.Хлим);
    const hley = 1.141 * Number(number.Хлей);

    const uer = -6.282 + hgem + hney + hlim - hley;
    setResult(uer);

    // setSubmitted(false);
  }

  return (
    <div className="container">
        {/* <h1>Рассчет ЕРП</h1>xs */}
        <p>У<sub>эер</sub> = -6,282 + 0,053 x Х<sub>гем</sub> + 0,185 x Х<sub>ней</sub> + 0,376 x Х<sub>лим</sub> - 1,141 x Х<sub>лей</sub></p>
            <p>где:</p>
            <ul>
                <li>У<sub>эер</sub> – дискриминантная функция, характеризующая вероятность наличия послеродового эндометрита у пациенток после вагинальных родов</li>
                <li>Х<sub>гем</sub> – уровень гемоглобина (г/л)</li>
                <li>Х<sub>ней</sub> – уровень нейтрофилов (x10<sup>9</sup>/л)</li>
                <li>Х<sub>лим</sub> – уровень лимфоцитов (x10<sup>9</sup>/л)</li>
                <li>Х<sub>лей</sub> – уровень лейкоцитов (x10<sup>9</sup>/л)</li>
            </ul>

            <form onSubmit={handleSubmit}>
                <div className="tables">
                    <table>
                        <tbody>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>гем</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="Хгем"
                                        onChange={handleChange}
                                        value={number.Хгем}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>

                            <tr>
                                <th style={{width: "220px"}}>Х<sub>ней</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="Хлей"
                                        onChange={handleChange}
                                        value={number.Хлей}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>

                            <tr>
                                <th style={{width: "220px"}}>Х<sub>лим</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="Хней"
                                        onChange={handleChange}
                                        value={number.Хней}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>

                            <tr>
                                <th style={{width: "220px"}}>Х<sub>лей</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="Хлим"
                                        onChange={handleChange}
                                        value={number.Хлим}
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
            <div className="result-space" style={{ minHeight: '50px', paddingBottom: '50px' }}>
            {submitted && (
                <div className="result">
                Результат:
                <span className={result > -0.045 ? 'result-red' : 'result-green'}> {result}</span>
                <p className="information">{'Уэер > -0,045 - группа высокого риска развития послеродового эндомтерита.'}<br />
                    {'Уэер < -0,045 - группа низкого риска развития послеродового эндомтерита.'}
                </p>
            </div>
            )}
            </div>
    </div>
);
}

export default ERPCalculatorTwo;
