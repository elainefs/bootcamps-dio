import styled from 'styled-components'
import { IUserInfoStyle } from './types'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #ffffff;
  margin-left: 12px;
`

export const NameText = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  margin-left: 10px;
`

export const Progress = styled.div<IUserInfoStyle>`
  width: 180px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 3px;
  position: relative;
  margin-left: 10px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({percentual}) => percentual}%;
    height: 6px;
    border-radius: 3px;
    background-color: #23dd7a;
  }
`