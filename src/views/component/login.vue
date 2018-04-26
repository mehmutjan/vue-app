<template>
    <Col span="20">
        <Form ref="form" :model="form" :rules="ruleValidate" :label-width="80">
            <FormItem label="用户名" prop="username">
                <Input v-model="form.username" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="密码" prop="password">
                <Input v-model="form.password" placeholder="Enter your password"></Input>
            </FormItem>

            <FormItem>
                <Button type="primary" @click="handleSubmit('form')">登陆</Button>
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
                form: {
                    username: '',
                    password: '',
                },
                ruleValidate: {
                    username: [
                        {required: true, message: 'The name cannot be empty', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: 'password cannot be empty', trigger: 'blur'},
                    ],
                },
            };
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (!valid) {
                        this.$Message.error('Fail!');
                    } else {
                        authClient('AUTH_LOGIN', this.form);
                        this.$Message.success('Success!');
                    }
                });
            },
        }
    };
</script>
