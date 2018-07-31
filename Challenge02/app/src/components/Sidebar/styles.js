import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100%;
`;
export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 320px;
    width: 100%;
    height: 100vh;
    padding: 30px;
    background: #fff;
    box-shadow: 5px 5px 5px #eee;
    z-index: 1;
`;

export const MainContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    ul {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 2em;
        width: 90%;

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: calc(100% / 3.2);
            background: #fff;
            padding: 20px;
            margin: 0 15px 15px 15px;
            height: 150px;
            list-style: none;
            border-radius: 5px;
            .header-text {
                display: flex;
                flex-direction: column;
                button {
                    border: 0;
                    background: #b286d1;
                    color: #fff;
                    width: 170px;
                    height: 40px;
                    border-radius: 5px;
                    i {
                    }
                    a {
                        color: #fff;
                        text-decoration: none;
                        font-size: 14px;
                        font-weight: bold;
                    }
                }
            }
            img {
                margin-right: 20px;
                width: 64px;
                height: 64px;
            }
        }
    }
`;

export const SidebarHeader = styled.header`
    form {
        display: flex;
        justify-content: center;
        border-bottom: 2px solid #eee;
        padding-bottom: 1.5em;

        input {
            background: #eee;
            padding: 1.3em;
            height: 50px;
            border-radius: 3px;
            border: none;
            font-size: 16px;
            width: 200px;
        }
        button {
            margin: 0;
            background: #fff;
            margin-left: 15px;
            border: 0;
            font-size: 1em;
            background: #59ea9a;
            width: 50px;
            border-radius: 3px;
            i {
                color: #fff;
            }
        }
    }
`;

export const ReposList = styled.div`
    li {
        padding-top: 0.5em;
        display: flex;
        list-style: none;
        margin-top: 1em;
        width: 280px;
        align-items: center;

        img {
            margin-left: 0.5em;
            width: 45px;
            height: 45px;
            border-radius: 2px;
        }
        div {
            width: 100px;
            margin-left: 1.2em;
            display: flex;
            flex-direction: column;
            small {
                color: #999;
            }
        }
        i {
            font-size: 30px;
            margin-left: 2.5em;
            color: #999;
        }
    }
`;
