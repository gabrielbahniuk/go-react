import styled from 'styled-components';

export const HeaderContainer = styled.section`
    display: flex;
    height: 100px;
    background: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    box-shadow: 5px 5px #eee;

    img {
        width: 45px;
        height: 45px;
        border-radius: 2px;
    }

    select {
        height: 45px;
        width: 200px;
        padding: 10px;
    }

    .header-container-repo {
        display: flex;
        align-items: center;
        width: 300px;

        .header-title {
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            strong {
                color: #005;
            }
            small {
                color: #999;
            }
        }
    }
`;
