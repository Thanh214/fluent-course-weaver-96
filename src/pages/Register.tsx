
import React from "react";
import Layout from "@/components/layout/Layout";
import AuthForm from "@/components/auth/AuthForm";

const Register: React.FC = () => {
  return (
    <Layout>
      <section className="py-16 min-h-[calc(100vh-200px)] flex items-center">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <div className="max-w-md">
                <h1 className="text-4xl font-bold mb-6">Tham Gia Cộng Đồng Học Tập</h1>
                <p className="text-muted-foreground text-lg mb-6">
                  Tạo tài khoản và bắt đầu hành trình học tập của bạn ngay hôm nay. Truy cập thế giới
                  kiến thức và kỹ năng để phát triển sự nghiệp và bản thân.
                </p>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Lợi ích của thành viên</h3>
                  <ul className="space-y-3">
                    {[
                      "Truy cập không giới hạn vào thư viện khóa học của chúng tôi",
                      "Theo dõi tiến độ của bạn trên tất cả các khóa học",
                      "Lưu và đánh dấu các bài học yêu thích của bạn",
                      "Tương tác với giảng viên và học viên khác",
                      "Nhận chứng chỉ hoàn thành khóa học",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <AuthForm type="register" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
