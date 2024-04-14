import React, { useState } from 'react';
import '../App.css';


function ERPCalculatorTwo() {
const [numberTwo, setNumberTwo] = useState({
    Хгем: '',
    Хлей: '',
    Хлим: '',
    Хней: ''
});

const labelsTwo = {
    Хгем: 'Х<sub>гем</sub>',
    Хлей: 'Х<sub>лей</sub>',
    Хлим: 'Х<sub>лим</sub>',
    Хней: 'Х<sub>ней</sub>'
};

const [resultTwo, setResultTwo] = useState('');
const [submitted, setSubmitted] = useState(false);

function handleChangeTwo(event) {
    const input = event.target;
    const name = input.name;
    const value = input.value;
    setNumberTwo({
      ...numberTwo,
      [name]: value
    });
  }

  function handleSubmitTwo(event) {
    event.preventDefault();
    setSubmitted(true);

    const hgem = 0.053 * Number(numberTwo.Хгем);
    const hley = 0.185 * Number(numberTwo.Хлей);
    const hlim = 0.376 * Number(numberTwo.Хлим);
    const hney = 1.141 * Number(numberTwo.Хней);

    const uer = -6.282 + hgem + 0.185 * hley + 0.376 * hlim + 1.141 * hney;
    setResultTwo(uer);

    setSubmitted(false);
  }

  return (
    <div className="container">
        {/* <h1>Рассчет ЕРП</h1>xs */}
        <p>У<sub>эер</sub> = –6,282 + 0,053 * Х<sub>гем</sub> + 0,185 * Х<sub>ней</sub> + 0,376 * Х<sub>лим</sub> - 1,141 * Х<sub>лей</sub></p>
            <p>где:</p>
            <ul>
                <li>У<sub>эер</sub> - дискриминантная функция, характеризующая вероятность наличия послеродового эндометрита у пациенток после вагинальных родов</li>
                <li>Х<sub>гем</sub> – уровень гемоглобина </li>
                <li>Х<sub>ней</sub> – уровень нейтрофилов </li>
                <li>Х<sub>лим</sub> - уровень лимфоцитов</li>
                <li>Х<sub>лей</sub> – уровень лейкоцитов</li>
            </ul>

            <form onSubmit={handleSubmitTwo}>
                <div className="tables">
                    <table>
                        <tbody>
                            <tr>
                                <th style={{width: "220px"}}>Х<sub>гем</sub></th>
                                <th>
                                    <input
                                        type="number"
                                        name="Хгем"
                                        onChange={handleChangeTwo}
                                        value={numberTwo.Хгем}
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
                                        name="Хлей"
                                        onChange={handleChangeTwo}
                                        value={numberTwo.Хлей}
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
                                        onChange={handleChangeTwo}
                                        value={numberTwo.Хней}
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
                                        onChange={handleChangeTwo}
                                        value={numberTwo.Хлим}
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
                <span className={resultTwo > -0.045 ? 'result-red' : 'result-green'}> {resultTwo}</span>
                <p className="information">{'Уэер > -0,045 - группа высокого риска развития послеродового эндомтерита.'}</p>
                <p className="information">{'Уэер < -0,045 - группа низкого риска развития послеродового эндомтерита.'}</p>
            </div>
    </div>
);
}

export default ERPCalculatorTwo;
