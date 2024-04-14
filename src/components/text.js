import React, { useState } from 'react';

function ERPCalculator() {
    const [values, setValues] = useState({
        XНК: '',
        XНР: '',
        XГСД: '',
        XВ: '',
        XИМТ: '',
        XОК: ''
    });

    const [result, setResult] = useState(null);

    const labels = {
        XНК: 'Х<sub>НК</sub>',
        XНР: 'Х<sub>НР</sub>',
        XГСД: 'Х<sub>ГСД</sub>',
        XВ: 'Х<sub>В</sub>',
        XИМТ: 'Х<sub>ИМТ</sub>',
        XОК: 'Х<sub>ОК</sub>',
    };

    const inputProps = {
        XНК: { min: "0", max: "1", step: "1" },
        XНР: { min: "1", max: "2", step: "1" },
        XГСД: { min: "0", max: "1", step: "1" },
        XВ: { min: "0", max: "1", step: "1" },
        XИМТ: { min: "0", max: "999", step: "0.1" },
        XОК: { min: "0", max: "9999", step: "1" }
    };

    const handleChange = (param, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [param]: value
        }));
    };

    const calculateResults = () => {
        if (Object.values(values).some(value => value === '')) {
            alert('Пожалуйста заполните все поля для рассчетов.');
            return;
        }

        const e = 2.718;  // The base of natural logarithms
        const z = 5.714 * parseFloat(values.XНК) + 3.234 * parseFloat(values.XНР) + 
                  2.468 * parseFloat(values.XГСД) + 2.240 * parseFloat(values.XВ) + 
                  0.381 * parseFloat(values.XИМТ) + 0.008 * parseFloat(values.XОК) - 19.028;
        const P = 1 / (1 + Math.pow(e, z));
        setResult(P);
    };

    const renderTable = (params) => (
        <div className="table-responsive">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    {params.map((param, index) => (
                        <tr key={param} style={{ backgroundColor: index % 2 ? '#f9f9f9' : 'white' }}>
                            <td dangerouslySetInnerHTML={{ __html: labels[param] }} style={{ padding: '10px' }}></td>
                            <td>
                                <input
                                    type="number"
                                    value={values[param]}
                                    onChange={e => handleChange(param, e.target.value)}
                                    {...inputProps[param]}
                                    required
                                    style={{ width: '100px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', margin: 'auto', display: 'block' }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
    return (
        <div style={{ padding: '20px', maxWidth: '1024px', margin: 'auto' }}>
            <h1 style={{ textAlign: 'center' }}>Рассчет ЕРП</h1>
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
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
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {renderTable(['XНК', 'XНР', 'XГСД'])}
                    {renderTable(['XВ', 'XИМТ', 'XОК'])}
                </div>
                <button onClick={calculateResults} style={{ width: '100%', marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>Рассчитать</button>
                <div style={{ marginTop: '10px' }}>
                    <h2>Результат: {result !== null ? result.toFixed(4) : ''}</h2>
                    {result !== null && result >= 0.472}
                    <p style={{ fontSize: '10px', fontWeight: '200', color: '#838586' }}>
                        Р ≥ 0.472 - риск развития эндометрита считается высоким
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ERPCalculator;



<p>У<sub>эер</sub> = –6,282 + 0,053 * Х<sub>гем</sub> + 0,185 * Х<sub>ней</sub> + 0,376 * Х<sub>лим</sub> - 1,141 * Х<sub>лей</sub></p>
            <p>где:</p>
            <ul>
                <li>У<sub>эер</sub> - дискриминантная функция, характеризующая вероятность наличия послеродового эндометрита у пациенток после вагинальных родов</li>
                <li>Х<sub>гем</sub> – уровень гемоглобина </li>
                <li>Х<sub>ней</sub> – уровень нейтрофилов </li>
                <li>Х<sub>лим</sub> - уровень лимфоцитов</li>
                <li>Х<sub>лей</sub> – уровень лейкоцитов</li>
            </ul>
            