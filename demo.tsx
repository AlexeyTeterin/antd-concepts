import React, { useState } from 'react';
import './index.css';
import { Button, ButtonProps, Divider, Flex, Space, Typography } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

type ToggleButtonProps = ButtonProps & {
  checked: boolean;
};

const ToggleButton = ({ checked, children, ...props }: ToggleButtonProps) => {
  return (
    <Button {...props} className={checked ? 'checked' : null}>
      {children}
    </Button>
  );
};

const App: React.FC = () => {
  const [primaryChecked, setPrimaryChecked] = useState(false);
  const [deafultChecked, setDeafultChecked] = useState(false);

  const handlePrimaryClick = () => {
    setPrimaryChecked(!primaryChecked);
  };

  const handleDeafultClick = () => {
    setDeafultChecked(!deafultChecked);
  };

  return (
    <Space direction="vertical">
      <Typography.Title level={4}>
        Кнопка-переключатель (ToggleButton)
      </Typography.Title>
      <Typography.Text>
        Концепт на основе:
        <ul>
          <li>кнопки Ant Design,</li>
          <li>её стандартной стилизации в состоянии "loading",</li>
          <li>произвольной иконки.</li>
        </ul>
      </Typography.Text>
      <Flex gap="small">
        <Button size="small" type="primary">
          Primary Button
        </Button>
        {' + '}
        <Button loading size="small" type="primary">
          Primary Button (loading)
        </Button>
        {' + '}
        <ReloadOutlined />
        {' = '}
        <ToggleButton
          checked={primaryChecked}
          icon={<ReloadOutlined />}
          size="small"
          type="primary"
          onClick={handlePrimaryClick}
        >
          Обновлять список
        </ToggleButton>
      </Flex>

      <Typography.Text>
        Концепт на основе "default"-кнопки Ant Design
      </Typography.Text>
      <Flex gap="small">
        <Button size="small">Default Button</Button>
        {' + '}
        <Button loading size="small">
          Default Button (loading)
        </Button>
        {' + '}
        <ReloadOutlined />
        {' = '}
        <ToggleButton
          checked={deafultChecked}
          icon={<ReloadOutlined />}
          size="small"
          onClick={handleDeafultClick}
        >
          Обновлять список
        </ToggleButton>
      </Flex>
    </Space>
  );
};

export default App;
