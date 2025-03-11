import { Collapse } from 'antd';
import React from 'react';
import './index.css';
import { ToggleButtonPage } from './ToggleButtonPage';
import { TabsPage } from './TabsPage';


export const Demo: React.FC = () => {
  return <Collapse items={[
    {
      key: '1', label: 'Вкладки со счетчиком', 
      children: <TabsPage />
    },
    {
      key: '2', label: 'Кнопка-переключатель (ToggleButton)', 
      children: <ToggleButtonPage />
    }
  ]} />
};
