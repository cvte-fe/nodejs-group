# 如何跑起V8

----

### 安装depot_tool

git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
export PATH=$PATH:/Path/To/depot_tools
fetch v8
cd v8
gclient sync
gn args out.gn/x64.release
ninja -C out.gn/x64.release