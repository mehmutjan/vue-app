<template>
    <Col span="20">
        <Form ref="registerForm" :model="registerForm" :rules="registerRuleValidate"
              :label-width="80">

            <FormItem label="用户名" prop="username">
                <Input v-model="registerForm.username" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="邮箱" prop="email">
                <Input v-model="registerForm.email" placeholder="Enter your email"></Input>
            </FormItem>
            <FormItem label="密码" prop="password.first">
                <Input v-model="registerForm.password.first"
                       placeholder="Enter your password"></Input>
            </FormItem>

            <FormItem label="确认密码" prop="password.second">
                <Input v-model="registerForm.password.second"
                       placeholder="Enter your password"></Input>
            </FormItem>

            <FormItem>
                <Button type="primary" @click="handleSubmit('registerForm')">注册</Button>
            </FormItem>
        </Form>
    </Col>
</template>
<script>
    import webApi from '../../api/web-api';
    import authClient from '../../libs/authClient';

    export default {
        data() {
            return {
                registerForm: {
                    username: '',
                    email: '',
                    password: {
                        first: '',
                        second: ''
                    },
                },
                registerRuleValidate: {
                    username: [
                        {required: true, message: 'The name cannot be empty', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: 'The email cannot be empty', trigger: 'blur'},
                        {type: 'email', message: 'The email cannot be empty', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: 'password cannot be empty', trigger: 'blur'},
                    ],
                }
            };
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (!valid) {
                        this.$Message.error('Fail!');
                    } else {
                        webApi.register(this.registerForm).then(data => {
                            authClient('AUTH_REGISTER', data);
                        });
                        this.$Message.success('Success!');
                    }
                });
            },
        }
    };
</script>
