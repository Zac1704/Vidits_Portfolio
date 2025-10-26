// index.hook.js
import { useEffect, useRef } from "react";

export const useKeychainPhysics = (keychains, hoveredKeychain) => {
  const keychainStates = useRef({});
  const animationFrames = useRef({});

  useEffect(() => {
    keychains.forEach((keychain) => {
      keychainStates.current[keychain.id] = {
        angle: 0,
        velocity: 0,
        targetAngle: 0,
      };
    });
  }, []);

  const handleMouseMove = (e, keychainId) => {
    const element = document.getElementById(`keychain-${keychainId}`);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + 20;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const maxDistance = 250;
    const influence = Math.pow(1 - Math.min(1, distance / maxDistance), 2);

    const angle = Math.atan2(deltaX, Math.max(1, deltaY)) * (180 / Math.PI);
    const targetAngle = angle * influence * 0.8;

    if (keychainStates.current[keychainId]) {
      keychainStates.current[keychainId].targetAngle = Math.max(
        -25,
        Math.min(25, targetAngle)
      );
    }
  };

  const animatePendulum = () => {
    keychains.forEach((keychain) => {
      const state = keychainStates.current[keychain.id];
      const element = document.getElementById(`keychain-chain-${keychain.id}`);
      if (!state || !element) return;

      const isHovered = hoveredKeychain === keychain.id;

      const springStrength = isHovered ? 0.008 : 0.004;
      const damping = isHovered ? 0.88 : 0.93;
      const gravity = 0.0008;

      const restingForce = state.targetAngle === 0 ? -state.angle * 0.002 : 0;
      const angleDiff = state.targetAngle - state.angle;

      const springForce = angleDiff * springStrength;
      const gravityForce = Math.sin((state.angle * Math.PI) / 180) * -gravity;

      state.velocity += springForce + gravityForce + restingForce;
      state.velocity *= damping;
      if (Math.abs(state.velocity) < 0.1 && Math.abs(angleDiff) < 0.5)
        state.velocity += (Math.random() - 0.5) * 0.02;

      state.angle += state.velocity;
      state.angle = Math.max(-35, Math.min(35, state.angle));

      element.style.transform = `rotate(${state.angle}deg)`;
      element.style.transformOrigin = "top center";
    });

    animationFrames.current.main = requestAnimationFrame(animatePendulum);
  };

  useEffect(() => {
    animatePendulum();
    return () => {
      if (animationFrames.current.main) {
        cancelAnimationFrame(animationFrames.current.main);
      }
    };
  }, [hoveredKeychain]);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      keychains.forEach((k) => handleMouseMove(e, k.id));
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  return { keychainStates };
};
