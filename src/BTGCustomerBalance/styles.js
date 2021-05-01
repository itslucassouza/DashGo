import styled from 'styled-components';

const ListFoundsContainer = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;

    position: relative;

    .portifolio-options-title {
        text-align: center;
        padding: 32px 64px;
        font-size: var(--normal-text);
        color: var(--white-color-100);

        @media screen and (min-width: 304px) {
            font-size: var(--h4-text);
        }
    }

    .portifolio-page-content {
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .btn-default {
            align-self: flex-end;
            margin: 0;
        }
    }

    .portifolios-content {
        width: 100%;
    }

    .portifolio-item {
        margin: 0 10px;
        display: flex;
        justify-content: space-around;
    }

    .portifolio-page-content {
        min-height: 10px;
        background: var(--black-color-100);
        padding: 10px 10px;

        border-radius: 5px;
    }

    .rdp-btn {
        display: flex;
        justify-content: flex-end;
    }

    .portifolio-table {
        display: flex;
        justify-content: center;
        overflow-y: auto;
        border-radius: 5px;
        padding: 10px 15px;
        margin-bottom: 6px;
        color: var(--white-color-300);

        table {
            thead {
                background-color: var(--gray-color-600);
                tr {
                    th {
                        p {
                            text-align: center;
                            border-right: 1px solid var(--gray-color-300);
                            width: 170px;
                            padding: 06px 0;
                            font-size: var(--smaller-text);
                        }
                    }
                }
            }
            tbody {
                tr {
                    td {
                        .overflow-text {
                            display: block;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        p {
                            text-align: center;
                            display: flex;
                            padding: 5px;
                            height: 27px;
                            align-items: center;
                            justify-content: center;
                            border: 1px solid var(--gray-color-600);
                            width: 170px;
                            font-size: 0.63em;
                        }
                    }
                }
            }
        }
    }

    .btn-branches {
        svg {
            margin: 0 07px;
            cursor: pointer;
        }
    }
`;

export default ListFoundsContainer;
