import { LoadingOutlined } from '@ant-design/icons';
import { Button, Space, Tabs, Tag } from "antd";
import { ReactNode, useRef, useState } from "react";

const randomNumber = (digits: number) => {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Компонент для отображения числа в теге
const CountTag: React.FC<{ content: ReactNode }> = ({ content }) => (
  <Tag
    color="rgba(0, 0, 0, 0.05)" // черный 10% затемнение
    bordered={false}
    style={{
      position: 'absolute',
      right: '-38px',
      top: '-8px',
      color: 'rgba(0, 0, 0, 0.65)',
      fontSize: '12px',
      padding: '0 4px',
      lineHeight: '16px',
      minWidth: '32px',
      textAlign: 'center'
    }}
  >
    {content}
  </Tag>
);

export const TabsPage: React.FC = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<Record<string, number>>({});
  const [countdown, setCountdown] = useState(3);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleCalculate = async () => {
    setIsCalculating(true);
    setCountdown(3);
    
    // Запускаем обратный отсчет
    const startTime = Date.now();
    const updateCountdown = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.ceil((3000 - elapsed) / 1000);
      
      if (remaining > 0) {
        setCountdown(remaining);
        timerRef.current = setTimeout(updateCountdown, 100);
      }
    };
    
    timerRef.current = setTimeout(updateCountdown, 100);
    
    // Имитация подсчета в течение 3 секунд
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Очищаем таймер
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Генерация случайных чисел для каждой вкладки
    setResults({
      "1": randomNumber(1),
      "2": randomNumber(3),
      "4": randomNumber(5),
    });
    
    setIsCalculating(false);
  };

  const getTabLabel = (baseLabel: string, tabKey: string) => {
    const numberContent = isCalculating 
      ? <LoadingOutlined spin />
      : results[tabKey] !== undefined 
        ? String(results[tabKey])
        : "";

    return (
      <span style={{ position: 'relative', padding: '0 24px 0 0', marginRight: '16px' }}>
        {baseLabel}
        {numberContent && <CountTag content={numberContent} />}
      </span>
    );
  };

  return (
    <Space direction="vertical">
      <Button onClick={handleCalculate} disabled={isCalculating}>
        {isCalculating ? `Подсчет... (${countdown}с)` : "Посчитать"}
      </Button>
      <Tabs
        type="card"
        items={[
          {
            key: "1",
            label: getTabLabel("Вкладка 1", "1"),
            children: (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos.
              </div>
            ),
          },
          {
            key: "2",
            label: getTabLabel("Вкладка 2", "2"),
            children: (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quis, animi non deserunt eveniet neque dolorem ea velit eligendi
                voluptates!
              </div>
            ),
          },
          {
            key: "3",
            label: "Вкладка 3",
            children: (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos.
              </div>
            ),
          },
          {
            key: "4",
            label: getTabLabel("Вкладка 4", "4"),
            children: (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos.
              </div>
            ),
          },
        ]}
      />
    </Space>
  );
};
