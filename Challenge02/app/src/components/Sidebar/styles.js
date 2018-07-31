import styled from 'styled-components';

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

export const SidebarHeader = styled.header`
    form {
        display: flex;
        justify-content: center;
        border-bottom: 2px solid #eee;
        padding-bottom: 1.5em;
    }

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
`;

export const ReposList = styled.div`
    li {
        padding-top: 0.5em;
        display: flex;
        list-style: none;
        margin-top: 1em;
        width: 280px;
        align-items: center;
        justify-content: space-around;
        img {
            width: 45px;
            height: 45px;
            border-radius: 2px;
        }
        div {
            display: flex;
            flex-direction: column;
            small {
                color: #999;
            }
        }
        i {
            font-size: 30px;
            margin-left: 1.5em;
            color: #999;
        }
    }
`;
