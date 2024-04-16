import React, { useState } from 'react';
import '../App.css';


function KSCalculatorTwo() {
const [number, setNumber] = useState({
    Хлей: '',
    Хней: '',
    Хмон: '',
    Хлим: '',
    Хгмк: '',
    Хтрб: '',
    Хэр: '',
    Хгем: '',
    Хоб: ''
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

    const hley = 0.085 * Number(number.Хлей);
    const hney = 0.006 * Number(number.Хней);
    const hmon = 0.319 * Number(number.Хмон);
    const hlim = 0.001 * Number(number.Хлим);
    const hgmk = 0.110 * Number(number.Хгмк);
    const htrb = 0.001 * Number(number.Хтрб);
    const her = 1.488 * Number(number.Хэр);
    const hgem = 0.053 * Number(number.Хгем);
    const hob = 0.093 * Number(number.Хоб);

    const uer = -0.278 + hley + hney + hmon + hlim + hgmk + htrb + her - hgem - hob;
    setResult(uer);

    // setSubmitted(false);
  }

  return (
    <div className="container">
        {/* <h1>Рассчет ЕРП</h1>xs */}
        <p>У<sub>эер</sub> = -0,278 + 0,085 * Х<sub>лей</sub> + 0,006 * Х<sub>ней</sub> + 0,319 * Х<sub>мон</sub> + 0,001 * Х<sub>лим</sub> + 0,110 * Х<sub>гмк</sub> + 0,001 * Х<sub>трб</sub> + 1,488 * Х<sub>эр</sub> - 0,044 * Х<sub>гем</sub> - 0,093 * Х<sub>об</sub></p>
            <p>где:</p>
            <ul>
                <li>У<sub>эер</sub> - дискриминантная функция, характеризующая вероятность наличия послеродового эндометрита у пациенток после после операции кесарева сечения</li>
                <li>Х<sub>лей</sub> - уровень лейкоцитов (x10<sup>9</sup>/л)</li>
                <li>Х<sub>ней</sub> – уровень  нейтрофилов (x10<sup>9</sup>/л)</li>
                <li>Х<sub>мон</sub> – уровень моноцитов (x10<sup>9</sup>/л)</li>
                <li>Х<sub>лим</sub> - уровень  лимфоцитов (x10<sup>9</sup>/л)</li>
                <li>Х<sub>гмк</sub> – уровень гематокрита (%)</li>
                <li>Х<sub>трб</sub> – уровень тромбоцитов (x10<sup>9</sup>/л)</li>
                <li>Х<sub>эр</sub> – ровень  эритроцитов (x10<sup>12</sup>/л)</li>
                <li>Х<sub>гем</sub> – уровень гемоглобина (г/л)</li>
                <li>Х<sub>об</sub> – уровень общего белка (г/л)</li>

            </ul>

            <form onSubmit={handleSubmit}>
                <div className="tables">
                    <table>
                        <tbody>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>лей</sub></th>
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
                                <th style={{width: "220px"}}>Х<sub>ней</sub></th>
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
                                <th style={{width: "220px"}}>Х<sub>мон</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="Хмон"
                                        onChange={handleChange}
                                        value={number.Хмон}
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
                                        name="Хлим"
                                        onChange={handleChange}
                                        value={number.Хлим}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>гмк</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="Хгмк"
                                        onChange={handleChange}
                                        value={number.Хгмк}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>трб</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="Хтрб"
                                        onChange={handleChange}
                                        value={number.Хтрб}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>эр</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="Хэр"
                                        onChange={handleChange}
                                        value={number.Хэр}
                                        submitted={submitted}
                                        required
                                    />
                                </th>
                            </tr>
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
                                <th style={{width: "220px"}}>Х<sub>об</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="Хоб"
                                        onChange={handleChange}
                                        value={number.Хоб}
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
                    <p className="information">{'Уэер > 0,014 - группа высокого риска развития послеродового эндомтерита.'}<br />
                        {'Уэер < 0,014 - группа низкого риска развития послеродового эндомтерита.'}</p>
                </div>
                )}
            </div>
    </div>
);
}

export default KSCalculatorTwo;
