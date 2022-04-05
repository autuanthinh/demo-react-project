import React, { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import _ from 'lodash';
import * as authService from 'app/services/auth';

import { Button, Checkbox, Form, Input, Card, Typography, message } from 'antd';

import * as appActions from 'app/app/actions';

import messages from './messages';
import './index.scss';

const { Title } = Typography;

export interface IPageLoginProps {}

type RequiredMark = boolean | 'optional';

const PageLogin: FC<IPageLoginProps & InjectedIntlProps> = ({ intl }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setSubmitting] = useState(false);
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const login = useMemo(
    () =>
      _.debounce(
        async values => {
          try {
            const result = await authService.login({
              username: values.username as string,
              password: values.password as string,
            });

            dispatch(appActions.login(result.token));
          } catch (err: any) {
            setSubmitting(false);
            message.error(intl.formatMessage(messages.invalid));
          }
        },
        500,
        {
          leading: false,
          trailing: true,
        }
      ),
    [intl]
  );

  const onFinish = useCallback(
    (values: any) => {
      setSubmitting(true);
      login(values);
    },
    [login]
  );

  const onFinishFailed = useCallback((errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }, []);

  return (
    <div className="login-page">
      <Card className="login-card">
        <Title level={1} style={{ textAlign: 'center' }}>
          {intl.formatMessage(messages.title)}
        </Title>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ username: '', password: '', remember: true, requiredMarkValue: requiredMark }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={intl.formatMessage(messages.username)}
            name="username"
            rules={[{ required: true, message: intl.formatMessage(messages.username_required) }]}
          >
            <Input disabled={isSubmitting} />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage(messages.password)}
            name="password"
            rules={[{ required: true, message: intl.formatMessage(messages.password_required) }]}
          >
            <Input.Password disabled={isSubmitting} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox disabled={isSubmitting}>{intl.formatMessage(messages.remember)}</Checkbox>
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              {intl.formatMessage(messages.submit)}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], PageLogin) as FC<IPageLoginProps>;
