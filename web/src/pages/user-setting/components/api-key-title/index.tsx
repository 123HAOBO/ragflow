import { useSaveApiKey } from '@/hooks/llm-hooks';
import userService from '@/services/user-service';
import { CopyOutlined } from '@ant-design/icons';
import { Button, Col, Row, Statistic, message } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.less';

export interface ApiKey {
  id?: number;
  key: string;
  remain_quota?: number;
  expired_time?: number;
}
const ApiKeyTitle = () => {
  const { saveApiKey } = useSaveApiKey();
  const [apiKey, setApiKey] = useState<ApiKey>();
  const [loading, setLoading] = useState<boolean>(false);
  const loadApiKey = () => {
    setLoading(true);
    userService
      .getApiKey()
      .then((res) => {
        if (res.data?.data) {
          //console.log(res.data)
          setApiKey(res.data?.data);
          saveApiKey({
            llm_factory: '埃典科技(ideal2077.com)',
            api_key: res.data?.data.key,
          })
            .then(() => {
              setLoading(false);
            })
            .catch(() => {
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadApiKey();
  }, []);
  const onClick = async () => {
    setLoading(true);
    userService.registerApiKey().then(() => {
      loadApiKey();
    });
  };
  const handleCopy = () => {
    if (apiKey?.key) {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(apiKey.key)
          .then(() => {
            message.success('API Key 已复制到剪贴板');
          })
          .catch((err) => {
            message.error('复制失败，请重试');
          });
      } else {
        const input = document.createElement('input');
        input.value = apiKey.key;
        document.body.appendChild(input);
        input.select();
        try {
          document.execCommand('copy');
          message.success('API Key 已复制到剪贴板');
        } catch (e) {
          message.error('复制失败，请重试');
        }
        document.body.removeChild(input);
        // message.error('当前浏览器不支持剪贴板功能，请手动复制');
      }
    }
  };
  return (
    <Row gutter={16} className={styles.apiKeyTitle}>
      <Col span={24}>
        <Button
          style={{ marginBottom: 16 }}
          type="primary"
          disabled={apiKey || loading}
          onClick={onClick}
        >
          申请API-key
        </Button>
      </Col>
      <Col span={12}>
        <Statistic
          title="API-key"
          value={apiKey?.key}
          valueStyle={{ fontSize: '15px' }}
        />
        <Button
          icon={<CopyOutlined />}
          onClick={handleCopy}
          style={{ marginLeft: '0px' }}
        >
          复制 API-Key
        </Button>
      </Col>
      <Col span={12}>
        <Statistic
          title="剩余积分"
          value={apiKey?.remain_quota}
          precision={0}
          valueStyle={{ fontSize: '15px' }}
        />
      </Col>
    </Row>
  );
};
export default ApiKeyTitle;
