import styled from "styled-components";

export const Container = styled.footer`
  background: #1f3c3d;
  color: #fff;
  padding: 60px 80px 30px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  max-width: 280px;
`;

export const Logo = styled.h2`
  font-weight: bold;

  span {
    color: #4fd1c5;
  }
`;

export const Text = styled.p`
  margin: 15px 0;
  font-size: 14px;
  color: #cbd5e1;
`;

export const Socials = styled.div`
  display: flex;
  gap: 12px;

  span {
    width: 30px;
    height: 30px;
    background: #2d5557;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 13px;
  }
`;

export const Title = styled.h4`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
`;

export const Item = styled.p`
  font-size: 13px;
  color: #cbd5e1;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const SubscribeSection = styled.div`
  text-align: center;
  margin: 50px 0 30px;

  h3 {
    margin-bottom: 20px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  padding: 12px 25px;
  border: none;
  background: #3f8f96;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #2d6e73;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  font-size: 13px;
  color: #cbd5e1;
  border-top: 1px solid #2d5557;
  padding-top: 20px;
`;