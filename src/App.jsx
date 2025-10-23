import React, { useState, useRef, useEffect } from 'react';
import { Viewer, Entity, PointGraphics, PolylineGraphics } from 'resium';
import { 
  Cartesian3, 
  Color, 
  SceneMode,
  Math as CesiumMath
} from 'cesium';
import './App.css';

function App() {
  const [sceneMode, setSceneMode] = useState(SceneMode.SCENE3D);
  const viewerRef = useRef(null);

 
  // 初始化相机位置和设置
  useEffect(() => {
    if (viewerRef.current && viewerRef.current.cesiumElement) {
      const viewer = viewerRef.current.cesiumElement;
      const scene = viewer.scene;
      
      // 设置初始相机位置，更合理的俯视角度
      viewer.camera.setView({
        destination: Cartesian3.fromDegrees(116.4074, 35, 4000000),
        orientation: {
          heading: CesiumMath.toRadians(0),
          pitch: CesiumMath.toRadians(-30), // 更平缓的俯视角度
          roll: 0.0
        }
      });

      // 设置相机缩放限制
      scene.screenSpaceCameraController.minimumZoomDistance = 1.0; // 3D模式下允许靠近地面
      scene.screenSpaceCameraController.maximumZoomDistance = 40000000; // 最大缩放距离

      // 设置morph动画时间为2秒
      scene.morphTime = 2.0;
    }
  }, []);

  // 示例数据：北京的位置
  const beijingPosition = Cartesian3.fromDegrees(116.4074, 39.9042, 0);
  
  // 示例数据：上海的位置
  const shanghaiPosition = Cartesian3.fromDegrees(121.4737, 31.2304, 0);
  
  // 示例数据：广州的位置
  const guangzhouPosition = Cartesian3.fromDegrees(113.2644, 23.1291, 0);

  // 连接线的位置数组
  const linePositions = [
    beijingPosition,
    shanghaiPosition,
    guangzhouPosition,
    beijingPosition
  ];

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Viewer 
        ref={viewerRef}
        full 
        sceneMode={sceneMode}
        timeline={true}
        animation={true}
        baseLayerPicker={true}
        geocoder={true}
        homeButton={true}
        navigationHelpButton={true}
        sceneModePicker={true}
      >
        {/* 北京标记点 */}
        <Entity 
          name="北京"
          description="中国首都"
          position={beijingPosition}
        >
          <PointGraphics 
            pixelSize={15} 
            color={Color.RED}
            outlineColor={Color.WHITE}
            outlineWidth={2}
          />
        </Entity>

        {/* 上海标记点 */}
        <Entity 
          name="上海"
          description="中国经济中心"
          position={shanghaiPosition}
        >
          <PointGraphics 
            pixelSize={15} 
            color={Color.BLUE}
            outlineColor={Color.WHITE}
            outlineWidth={2}
          />
        </Entity>

        {/* 广州标记点 */}
        <Entity 
          name="广州"
          description="华南经济中心"
          position={guangzhouPosition}
        >
          <PointGraphics 
            pixelSize={15} 
            color={Color.GREEN}
            outlineColor={Color.WHITE}
            outlineWidth={2}
          />
        </Entity>

        {/* 连接线 */}
        <Entity>
          <PolylineGraphics 
            positions={linePositions}
            width={3}
            material={Color.YELLOW}
            clampToGround={false}
          />
        </Entity>
      </Viewer>

     
    </div>
  );
}

export default App;

