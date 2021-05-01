import React, { useState } from 'react';
import { toast } from 'react-toastify';
import BackBtn from '../../components/buttons/BackBtn';
import DownloadInput from '../../components/buttons/DownloadInput';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import DatePicker from '../../components/customElements/DatePicker';
import { hubApiBtg } from '../../services/hubApi/classes/HubApiBtg';
import ListFoundsContainer from './styles';
import hubApi from '../../services/hubApi';

const BTGCustomerBalance = () => {
    let dateNow = new Date();
    const [infosTable, setInfosTable] = useState([]);
    const [file, setFile] = useState('');
    const [date, setDate] = useState(
        `${dateNow.getFullYear().toString()}-${(dateNow.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${dateNow.getDate().toString().padStart(2, '0')}`
    );

    async function getBtgBalance() {
        const formData = new FormData();
        formData.append('btg', file);

        try {
            await hubApiBtg.postBtgBalance(formData, String(date));

            await hubApiBtg.getBtgBalance().then((response) => {
                setInfosTable(response);
            });
        } catch (e) {
            toast.dark('Ocorreu um erro ao fazer o upload');
        }

        return;
    }

    const handleAttSubmit = async (e) => {
        e.preventDefault();

        const newArray = {
            status: 'importado',
        };

        try {
            await hubApiBtg.attBtgBalance(newArray);
        } catch (e) {
            toast.dark('Ocorreu um erro ao enviar ');
        }
    };

    return (
        <ListFoundsContainer>
            <BackBtn link="/user/control_panel" />

            <h1 className="portifolio-options-title">BTG - Saldo do cliente</h1>

            <div className="portifolio-page-content">
                <div className="portifolio-item">
                    <DownloadInput setFile={setFile} accept=".csv" />
                    <DatePicker handlePickDate={setDate} value={date} full />
                    <SecondaryButton onClick={(e) => getBtgBalance(e)}>
                        Enviar
                    </SecondaryButton>
                </div>
                <div className="portifolio-table">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <p>Conta</p>
                                </th>
                                <th>
                                    <p>Nome</p>
                                </th>
                                <th>
                                    <p>Saldo</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {infosTable.map((info) => (
                                <>
                                    <tr>
                                        <td>
                                            <p>{info.btgAccount}</p>
                                        </td>
                                        <td>
                                            <p>{info.name}</p>
                                        </td>
                                        <td>
                                            <p>{info.balance}</p>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="rdp-btn">
                    <SecondaryButton onClick={(e) => handleAttSubmit(e)}>
                        Enviar
                    </SecondaryButton>
                </div>
            </div>
        </ListFoundsContainer>
    );
};

export default BTGCustomerBalance;
