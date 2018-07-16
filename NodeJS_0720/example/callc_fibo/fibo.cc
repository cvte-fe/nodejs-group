// hello.cc
#include <node.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Number;
using v8::Value;

int fibo(const int x) {
  if (x == 1) {
    return 1;
  } else if (x == 0) {
    return 0;
  } else {
    return fibo(x - 1) + fibo(x - 2);
  }
}

void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  int value = args[0]->NumberValue(); // v8 -> C++ 的类型转换
  int result = fibo(value);
  args.GetReturnValue().Set(Number::New(isolate, result)); // C++ -> v8实例内 的类型转换
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "fibo", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init)

}  // namespace demo