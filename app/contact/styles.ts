import styled from "styled-components";

export const Container = styled.section`
  background: #F4F9FA;
  padding: 80px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 60px;
  color: #666;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
`;

export const Left = styled.div``;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  min-height: 100%;
`;

export const InfoCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  text-align: left;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;

  p {
    margin: 3px 0 0;
    font-size: 13px;
    color: #888;
  }
`;

export const Icon = styled.div`
  background: #eef1f3;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Socials = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  span {
    background: #eef1f3;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  height: 120px;
  resize: none;
  outline: none;
`;

export const Button = styled.button`
  margin-top: auto; 
  align-self: flex-end; /* para direita */
  
  padding: 12px 40px;
  border: none;
  background: #1f3c3d;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;